import { useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';
import { getPhotos } from 'helpers/PixabayApi';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === '') return;
    setIsLoading(true);

    getPhotos(query, page).then(res => {
      if (!res.hits.length) {
        alert(`Please, try another one`);
        setIsLoading(false);
        return;
      }
      setImages(preImages =>
        page === 1 ? res.hits : [...preImages, ...res.hits]
      );
      setTotalHits(res.totalHits);
      setIsLoading(false);
    });
  }, [page, query]);

  const handelSubmit = text => {
    setQuery(text);
    setPage(1);
    setImages([]);
  };

  const handelLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Wrapper>
      <Searchbar onSubmit={handelSubmit} />
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} />}
      {totalHits > 12 && (
        <>
          <Button onShow={handelLoadMore} />
        </>
      )}
    </Wrapper>
  );
}
