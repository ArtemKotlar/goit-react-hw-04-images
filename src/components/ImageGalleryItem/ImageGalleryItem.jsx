import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImgGalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;
    return (
      <ImgGalleryItem>
        <Image onClick={toggleModal} src={webformatURL} alt={tags} />
        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </ImgGalleryItem>
    );
  }
}
