import React from 'react';
import img from '../../images/naim.png'
import './About.css'

const About = () => {
    return (
        <div className="container mt-5">
            <h2 className="fw-bold mb-5 ">About Me <br />
            <i class="far fa-window-minimize"></i>
            </h2>
            <div className="row mt-3">
                <div className="col-md-6">
                    <img className="image" src={img} alt="" />
                    
                </div>
                <div className="col-md-6 details text-right fw-bold">
                    <h1 classNam="fw-bold">I'm Naim</h1>
                <p>
An aspiring web developer with built-in curiosity and a clear mind.
I love anything creative, solving problems by learning regularly.</p>
<p>- Technological enthusiasm, curiosity and passion for programming. <br />
- Adaptable to new positions, problems, framework and libraries. <br />
- Strong appetency for learning. <br />
- Flexible communication to reach my audience and customer interaction skills. <br />
- Design and artistic soft skills.</p>
                </div>
            </div>
        </div>
    );
};

export default About;