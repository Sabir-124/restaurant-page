import { useContext } from 'react';
import '../styles/gallery.css';
import WebContext from '../context/WebContext';

const Gallery = () => {
  const photos = [
    {
      gallery: '/restaurant-page/images/gallery1.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery2.png'
    },
    {
      gallery: '/restaurant-page/images/gallery3.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery4.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery5.png'
    },
    {
      gallery: '/restaurant-page/images/gallery6.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery7.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery8.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery9.jpeg'
    },
    {
      gallery: '/restaurant-page/images/gallery10.jpeg'
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