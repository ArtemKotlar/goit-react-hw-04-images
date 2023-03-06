import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ImgGalleryItem, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <ImgGalleryItem>
      <Image onClick={toggleModal} src={webformatURL} alt={tags} />
      {isModalOpen && (
        <Modal modalImg={largeImageURL} tags={tags} closeModal={toggleModal} />
      )}
    </ImgGalleryItem>
  );
}
