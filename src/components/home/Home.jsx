import React, { useState, useEffect } from 'react';
import Main from '../template/Main';
import { Link } from 'react-router-dom';

// Import individual image files
import image from '../../assets/imgs/image.jpg';
import image2 from '../../assets/imgs/image2.jpg';
import image3 from '../../assets/imgs/image3.jpeg';

const Home = (props) => {
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    // Store imported images in an array inside the useEffect
    const images = [image, image2, image3];

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 1200);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const imageStyle = {
    width: '100%',
    // Define the border style and color here
  };

  return (
    <Main icon="home" title="Inicio">
      <div className='main'>
        <div className="display-4" id="principal">
          <img src={currentImage} alt="" style={imageStyle}/> 
          <p className='inspirational'>Inspirational Heating</p>
        </div>
        <div className='first'>
          <div className='radiators1'>
            <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
          <div className='designers'>
            <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
        </div>
        <div className='second'>
          <div className='radiators2'>
            <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
          <div className='radiators2'>
            <p className='radiators2Css'>Warranty</p>
          </div>
          <div className='radiators2'>
            <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
        </div>
        <div className='third'>
          <div className='radiators3'>
            <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
          <div className='radiators3'>
          <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
          <div className='radiators3'>
            <Link to="/" className="image3">
              <img src={image3} alt='image3'/>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;

