import { useContext } from 'react';
import '../styles/about.css';
import WebContext from '../context/WebContext';

const About = () => {
  const aboutText = <p>Since 2015, <b>Rice & Spice</b> has been bringing people together over extraordinary meals. Our journey began with a vision to honor the rich flavors and soulful cooking of Asian cuisine. With every dish, we pay homage to time-honored recipes, the finest ingredients, and a welcoming spirit that feels like home..</p>;
  
  const aboutChef = <p>At the heart of our kitchen is Chef <b>Anwar Ali</b>, whose culinary artistry and love for Asian cuisine make each meal an experience to remember. With a passion for flavors and a commitment to fresh, locally sourced ingredients, Chef <b>Anwar Ali</b> ensures that every plate tells a story.</p>;

  const {about} = useContext(WebContext);

  return (
    <div className="about-section">
      <div ref={about}></div>
      <div className="part1">
        <div className="text-part">
          <p className='text-color headings'>About us</p>
          <p className='about'>{aboutText}</p>
        </div>
        <div className="image-part">
          <img src='/images/restaurant.jpeg' alt='about-pic'/>
        </div>
      </div>

      <div className="part2">
        <div className="text-part">
          <p className='text-color headings'>Meet Chef <b>Anwar Ali</b></p>
          <p className='about'>{aboutChef}</p>
        </div>
        <div className="image-part2">
          <img src='/images/chef.jpeg' alt='chef-pic'/>
        </div>
      </div>
    </div>
  )
}

export default About;