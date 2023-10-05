import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onImage }) => {
  const { largeImageURL, tags, webformatURL } = item;
  return (
    <StyledImageGalleryItem
      onClick={() => {
        onImage({ largeImageURL, tags });
      }}
    >
      <div>
        <StyledImageGalleryItemImg
          src={webformatURL}
          alt={tags}
          loading="lazy"
        />
      </div>
    </StyledImageGalleryItem>
  );
};
