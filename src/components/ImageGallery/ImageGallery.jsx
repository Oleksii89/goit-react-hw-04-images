import { StyledImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <StyledImageGalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} item={image} onImage={onOpenModal} />
        );
      })}
    </StyledImageGalleryList>
  );
};
