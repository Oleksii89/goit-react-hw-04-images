import { StyledAppContainer } from 'App.styled';
import Searchbar from 'components/Searchbar/Searchbar';
import { findImagesByText } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Error } from 'components/Error/Error';
import Modal from 'components/Modal/Modal';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, data: null });

  useEffect(() => {
    if (!searchText) return;

    const fetchImagesByText = async () => {
      try {
        setIsloading(true);
        setError(null);
        const imagesFromApi = await findImagesByText(searchText, page);
        if (imagesFromApi.hits.length === 0) {
          setError(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        setImages(prevImages => [...prevImages, ...imagesFromApi.hits]);
        setLoadMore(page < Math.ceil(imagesFromApi.totalHits / 12));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    fetchImagesByText();
  }, [page, searchText]);

  const handleFormSubmit = searchText => {
    if (searchText.trim() === '') {
      setError(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    setSearchText(searchText);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onOpenModal = modalData => {
    setModal({
      isOpen: true,
      data: modalData,
    });
  };
  const onCloseModal = () => {
    setModal({
      isOpen: false,
      data: null,
    });
  };

  const showImages = Array.isArray(images) && images.length > 0;

  return (
    <StyledAppContainer>
      <Searchbar onSubmit={handleFormSubmit} />

      {isLoading && <Loader />}
      {error && <Error>({error})</Error>}
      {showImages && <ImageGallery images={images} onOpenModal={onOpenModal} />}

      {showImages && loadMore && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      {modal.isOpen && <Modal data={modal.data} onCloseModal={onCloseModal} />}
    </StyledAppContainer>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     searchText: '',
//     images: [],
//     isLoading: false,
//     error: null,
//     page: 1,
//     loadMore: false,
//     modal: {
//       isOpen: false,
//       data: null,
//     },
//   };
//   async componentDidUpdate(_, prevState) {
//     if (
//       this.state.page !== prevState.page ||
//       prevState.searchText !== this.state.searchText
//     ) {
//       this.setState({ isLoading: true });
//       if (this.state.error) {
//         this.setState({ error: null });
//       }
//       const { page } = this.state;
//       try {
//         const imagesFromApi = await findImagesByText(
//           this.state.searchText,
//           page
//         );

//         this.setState(prevState => ({
//           images: [...prevState.images, ...imagesFromApi.hits],
//           loadMore: page < Math.ceil(imagesFromApi.totalHits / 12),
//         }));
//         if (imagesFromApi.hits.length === 0) {
//           this.setState({
//             error:
//               'Sorry, there are no images matching your search query. Please try again.',
//           });
//         }
//       } catch (error) {
//         this.setState({ error: error.message });
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };
//   onOpenModal = modalData => {
//     this.setState({
//       modal: {
//         isOpen: true,
//         data: modalData,
//       },
//     });
//   };
//   onCloseModal = () => {
//     this.setState({
//       modal: {
//         isOpen: false,
//         data: null,
//       },
//     });
//   };

//   handleFormSubmit = searchText => {
//     this.setState({ searchText, page: 1, images: [] });
//   };

//   render() {
//     const { images, error, isLoading } = this.state;
//     const showImages = Array.isArray(images) && images.length > 0;
//     return (
//       <StyledAppContainer>
//         <Searchbar onSubmit={this.handleFormSubmit} />

//         {isLoading && <Loader />}
//         {error && <Error>({error})</Error>}
//         {showImages && (
//           <ImageGallery images={images} onOpenModal={this.onOpenModal} />
//         )}

//         {showImages && this.state.loadMore && (
//           <Button onClick={this.handleLoadMore}>Load more</Button>
//         )}
//         {this.state.modal.isOpen && (
//           <Modal
//             data={this.state.modal.data}
//             onCloseModal={this.onCloseModal}
//           />
//         )}
//       </StyledAppContainer>
//     );
//   }
// }
