import { useEffect, useState } from 'react';
import { getPhotos } from './apiService/axios';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0); 
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null); 

      try {
        const result = await getPhotos(query, page);
        setImages(prevImages => [...prevImages, ...result.results]);
        setIsVisible(page < Math.ceil(result.total / result.results.length));
        setTotal(result.total); 
      } catch (error) {
        setError(error); s
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const onHandleSubmit = value => {
    if (!value.trim()) {
      toast.error('Please enter a search query.');
      return;
    }
    setQuery(value);
    setImages([]);
    setPage(1);
    setTotal(0); 
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpen = (src, alt) => {
    setOpen(true);
    setSrc(src);
    setAlt(alt);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setOpen(false);
    setSrc('');
    setAlt('');
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {loading && <Loader />}
      {!images.length && !loading && !error && (
        <p style={{ textAlign: 'center' }}>Let's begin search 🔎</p>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} handleOpen={handleOpen} />
      )}
      {error && <ErrorMessage />} {/* Відображення помилки на основі стану помилки */}
      {isVisible && (
        <LoadMoreBtn onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load more'}
        </LoadMoreBtn>
      )}
      <ImageModal isOpen={open} handleOpen={handleOpen} closeModal={handleClose} src={src} alt={alt} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
