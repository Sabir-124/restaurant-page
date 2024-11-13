import { useContext } from 'react';
import '../styles/gallery.css';
import WebContext from '../context/WebContext';

const Gallery = () => {
  const photos = [
    {
      gallery: '/images/gallery1.jpeg'
    },
    {
      gallery: '/images/gallery2.png'
    },
    {
      gallery: '/images/gallery3.jpeg'
    },
    {
      gallery: '/images/gallery4.jpeg'
    },
    {
      gallery: '/images/gallery5.png'
    },
    {
      gallery: '/images/gallery6.jpeg'
    },
    {
      gallery: '/images/gallery7.jpeg'
    },
    {
      gallery: '/images/gallery8.jpeg'
    },
    {
      gallery: '/images/gallery9.jpeg'
    },
    {
      gallery: '/images/gallery10.jpeg'
    },
  ];

  const { gallery } = useContext(WebContext);

  return (
    <>
      <div ref={gallery}></div>
      <div className="gallery-section">
        <div className="gallery-header headings text-color">
          Gallery
        </div>
        <div className="gallery-text">
          <p>A Glimpse of <b>Rice & Spice</b></p>
          <p>Explore our photo gallery to get a taste of the vibrant dishes, cozy ambiance, and memorable moments that await you at <b>Rice & Spice</b>.</p>
        </div>
        <div className="galleries">
          {Object.values(photos).map((photo) => (
            <img className='photo' alt='restaurant-images' src={photo.gallery} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery;