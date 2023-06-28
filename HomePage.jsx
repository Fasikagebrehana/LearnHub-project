import React, {useState, useEffect} from 'react'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import homePage from './homePage.css'
const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const showSlides = (index) => {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i++) {
        slides[i].className = 'mySlides';  
      }
      if (index >= slides.length) {
        index = 0;
      }
      if (dots.length > 0) {
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[index].className += ' active';
      }
      if (slides.length > 0) {
        slides[index].className += ' active';  
      }
      setTimeout(() => showSlides(index + 1), 1000);
      setSlideIndex(index);
    }
    showSlides(slideIndex);
  }, []);
  return (
    <div>
      <nav className='navigation'>
        <div className='logo'>
          <h2><FontAwesomeIcon icon={faGraduationCap}/>LearnHub</h2>
        </div>
        <div>
          <ul className='nav-list'>
            <li className='nav-item'><a>HOME</a></li>
            <li className='nav-item'><a href='#about-us1'>ABOUT US</a></li>
            <li className='nav-item'><a href='#contact-us'>CONTACT US</a></li>
            <li className='nav-item dropdown'><a>REGISTER</a>
            <div className='dropdown-content'>
              <ul>
                <li><a>MENTOR</a></li>
                <li><a>STUDENT</a></li>
              </ul>
            </div>            
            </li>
            <li className='nav-item dropdown'><a>REGISTER</a>
            <div className='dropdown-content'>
              <ul>
                <li><a>MENTOR</a></li>
                <li><a>STUDENT</a></li>
              </ul>
            </div>            
            </li>
          </ul>
        </div>
      </nav>
      <div className='main'>
        <div className='main-content'>
          <h2 className='mb-4 main-title'>Anytime Anywhere<br/> Guide yourself By <br/> Proffessional Mentors<br/></h2>
          <p className="mb-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Access free study materials anytime, anywhere with our online platform. Download files related to your stream in just a few clicks from anywhere in the world. No more missing out on important study materials, everything is available at your fingertips.</p>
        </div>     
      <div className='slideshow-container grid-item'>
        <div className='mySlides fade'>
          <img src={image1} alt='slide1'className='images'></img>
        </div>
        <div className='mySlides fade'>
          <img src={image2} alt='slide2' className='images'></img>
        </div>
        <div className='mySlides fade'>
          <img src={image3} alt='slide3' className='images'></img>
        </div>
        <div className='mySlides fade'>
          <img src={image4} alt='slide4' className='images'></img>
        </div>
      </div>
      </div>
      <div className='whole-box'>
        <div className='box-1'>
          <h3>Get Your Study Material Easily</h3>
          <p>Simplifies the process of accessing study material and eliminates time-wasting activities like searching for where to study.</p>
        </div>
        <div className='box-2'>
          <h3>Prepare Yourself By the Questions</h3>
          <p>Practice questions to help you prepare in a concise and efficient manner.</p>        
        </div>
        <div className='box-3'>
          <h3>Check Recommended Video Material</h3>
          <p>We offer recommended video materials that can help you easily understand the study material.</p>
        </div>
      </div>
      <div className='about-us1' id='about-us1'>
        <div>
          <img src={image2} alt='image2' className='image2'></img>
        </div>
        <div className='about-us-detail'>
          <h2>About us</h2>
          <p>We are student of AASTU and member of GDSC this website is developed in collabration with the frontend, backend and UI student of GDSC. We believe that education should be accessible to everyone, no matter where they are in the world or what their schedule looks like. We don't just provide study materials, we also believe in the power of mentoring. That's why we work with professional mentors who are experts in their fields and passionate about helping others learn. With Study Buddy, you can download files related to your stream in just a few clicks, from anywhere in the world. No more missing out on important study materials or struggling to find the resources you need.</p>          
        </div>
      </div>
      <div className='contact-us' id='contact-us'>
        <h2>Contact us</h2>
        <p>We're here to help! If you have any questions or concerns about the Study Buddy website, please don't hesitate to contact us. You can reach us using <a><i><FontAwesomeIcon icon={faFacebook} /></i></a>&nbsp;&nbsp;&nbsp;
            <a href="https://t.me/tsihii"><i><FontAwesomeIcon icon={faTelegram} /></i></a>&nbsp;&nbsp;&nbsp;
            <a><i><FontAwesomeIcon icon={faInstagram} /></i></a>&nbsp;&nbsp;&nbsp;
            <a href='https://github.com/melkemk'><i><FontAwesomeIcon icon={faGithub} /></i></a></p>

      </div>
      <div className='whole-footer'>
        <div>
          <i><FontAwesomeIcon icon={faGraduationCap}/>  LearnHub</i>
        </div>
        <div>
          <h4>Courses</h4>
          <ul>
            <li>SoftwareEngineering</li>
            <li>ElectricalEngineering</li>
            <li>Medicine</li>
          </ul>                 
        </div>
        <div>
          <h4 className='about-us-title'>About us</h4>
          <p>We are student of AASTU <br/>and member of GDSC.<br/>This project is done <br/>in collabration with <br/>the frontend, backend and UI</p>            
        </div>
        <div>
          <h4>Contact us</h4>
          <div className='i-list'>
            <a><i><FontAwesomeIcon icon={faFacebook} /></i></a>
            <a href=""><i><FontAwesomeIcon icon={faTelegram} /></i></a>
            <a><i><FontAwesomeIcon icon={faInstagram} /></i></a>
            <a href='https://github.com/melkemk'><i><FontAwesomeIcon icon={faGithub} /></i></a>                  
         </div>

       </div>
     </div>
    </div>
  )
};

export default HomePage