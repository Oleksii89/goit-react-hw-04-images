import { StyledModal, StyledOverlayForModal } from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ onCloseModal, data }) => {
  useEffect(() => {
    const onKeydown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onCloseModal]);

  const onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  const { largeImageURL, tags } = data;

  return (
    <StyledOverlayForModal onClick={onOverlayClick}>
      <StyledModal>
        <img src={largeImageURL} alt={tags} />
      </StyledModal>
    </StyledOverlayForModal>
  );
};

export default Modal;

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeydown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeydown);
//   }

//   onKeydown = event => {
//     if (event.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   onOverlayClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props.data;
//     return (
//       <StyledOverlayForModal onClick={this.onOverlayClick}>
//         <StyledModal>
//           <img src={largeImageURL} alt={tags} />
//         </StyledModal>
//       </StyledOverlayForModal>
//     );
//   }
// }
