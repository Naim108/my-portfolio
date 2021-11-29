import React from 'react';
import Typical from 'react-typical'
import resume from '../../../images/Md-Naim-Hossain-Resume.pdf'
import Contact from '../../Contact/Contact/Contact';
import Header from '../../Shared/Header/Header';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="banner-container">
            <Header></Header>
            <div className="banner-parents">
                <div className="row">
                    <div className="col-md-6">
                    <div className="banner-details">
                    <div className="name">
                        <span className="style-name">
                            <h1>Hello,</h1>
                            <span >I'm Naim Hossain</span>
                        </span>
                    </div>
                    <div className="role">
                        <span className="text-color">
                           
                            <h1>
                            <Typical
        steps={['Junior Web Developer',
         3000,
         'MERN Stack Developer', 
         3000,
          'Full Stack Developer',
           3000]}
        loop={Infinity}
      />
                            </h1>
                        </span>
                    </div>
                    <div className="profile-data">
                        <button className="btn btn-design">Hire Me</button>
                        <a href={resume} download={resume}>
                            <button className="btn btn-design">Get resume</button>

                        </a>
                    </div>
                </div>
                <div className="social-icon">
                        <a href="https://www.facebook.com/profile.php?id=100009447616360">
                        <i class="fa fa-facebook icon"></i>
                        </a>
                        <a href="https://github.com/Naim108">
                        <i class="fa fa-github icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/md-naim-hossain-009a67182/">
                        <i class="fa fa-linkedin icon"></i>
                        </a>

                    </div>
                        
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
            <div>

            </div>
           
        </div>
        <Contact></Contact>
        </>
    );
};

export default Home;