import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './home.css';
import Background from '../images/Hotel.png';
import EventImageOne from '../images/engagement.png';
import EventImageTwo from '../images/wedding.png';
import EventImageThree from '../images/birthday.png';
import DinningimgOne from '../images/dinning01.webp';
import DinningimgTwo from '../images/dinning02.webp';
import DinningimgThree from '../images/dinning03.jpeg';
import BackgroundVideo from '../images/backvideo.mp4'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    if (isLoggedIn===true) {
      navigate('/roomtype');
    } else {
      navigate('/login');
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="Container1" id='container'>
        <img src={Background} alt="Background" className="background-image-new img-fluid" />
        <div className="contentContainer text-center text-md-left">
          <h1 className="homeTitle">Welcome to Crystal Cascade Hotel</h1>
          <div className="backgroundImage">
            <h2 className='h2-new'><i>
              Perched on the pristine shores of Mount Lavinia Beach, Hotel Crystel Cascade
              stands as a beacon of hospitality along the coastline of Colombo.
              <br></br>
              {isLoggedIn ? (
                <button className="btn btn-secondary custome" onClick={handleLogin} id='home-booknow'>
                  Book Now
                </button>
              ) : (
                <Link to='/roomtype' className="btn btn-secondary" onClick={handleLogin}>
                  Log in to Book Now
                </Link>
              )}
            </i></h2>
          </div>
          <br />
        </div>
      </div>

      <div className="Container2" id="events-container">
        <h1 className="h1-event">Upcoming Events</h1>
        <video autoPlay loop muted className="background-video">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <br></br>
        <Slider {...settings}>
          <div>
            <div className="card">
              <div className="card-body-event">
                <h3>Engagement</h3>
                <Link to='/event'><img src={EventImageOne} alt="Background" className="event-image-two img-fluid" /></Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-body-event">
                <h3>Wedding</h3>
                <h4>The Sri Lankan Surf Federation was established in 2017 and the inaugural edition of the National Surf Championship was held in 2018. The winner of the 2018 Sri Lankan National Surf Championship went onto qualify and participate at the 2019 IAS World Surfing Games which was held in Japan. It also marked the first-ever instance that a delegation from Sri Lanka had competed in the World Surfing Games. Sri Lanka alongside Lebanon, Thailand, and American Samoa also made their debuts at the World Surfing Games during the 2019 edition</h4>
                <Link to='/event'><img src={EventImageTwo} alt="Background" className="event-image-two img-fluid" /></Link>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-body-event">
                <h3>Engagement</h3>
                <Link to='/event'><img src={EventImageThree} alt="Background" className="event-image-two img-fluid" /></Link>
              </div>
            </div>
          </div>
        </Slider>

        <br></br>
        <div className="row">
        </div>
      </div>
   
      <div className="Container3" id="dining-container">
        <h1 className="h1-dining">Dining at Crystel Cascade</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card dining-card">
              <img src={DinningimgOne} className="card-img-top-dinning02" alt="Dining" />
              <div className="card-body">
                <h5 className="card-title">Cafe</h5>
                <p className="card-text">Relax with a cup of coffee and delicious pastries in our cozy cafe.</p>
                <Link to="/dining" className="btn btn-secondary">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card dining-card">
              <img src={DinningimgTwo} className="card-img-top-dinning02" alt="Dining" />
              <div className="card-body">
                <h5 className="card-title">Cafe</h5>
                <p className="card-text">Relax with a cup of coffee and delicious pastries in our cozy cafe.</p>
                <Link to="/dining" className="btn btn-secondary">
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card dining-card">
              <img src={DinningimgThree} className="card-img-top-dinning02" alt="Dining" />
              <div className="card-body">
                <h5 className="card-title">Cafe</h5>
                <p className="card-text">Relax with a cup of coffee and delicious pastries in our cozy cafe.</p>
                <Link to="/dining" className="btn btn-secondary">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
