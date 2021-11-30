import React from 'react';
import './Projects.css'
import image1 from '../../images/academy.PNG'
import image2 from '../../images/smartCar.PNG'
import image3 from '../../images/foodcart.PNG'
import image4 from '../../images/sport360.png'
import image5 from '../../images/panacea.PNG'

const Projects = () => {
    return (
        <div className="container" id="projects">
            <h2 className="fw-bold mb-5 ">Projects <br />
            <i class="far fa-window-minimize"></i>
            </h2>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="box">
                        <div>
                            <img className="box-img " src={image5} alt="" />
                        </div>
                        <h5>Panacea Care</h5>
                        <p>A full-stack health care web app using React, Node.js, Mongodb, Bootstrap, Heroku</p>
                        <div className="d-flex justify-content-between m-3">
                           <a href="https://github.com/Naim108/Panacea-Care"> <i class="fa fa-github icon-design "> Github</i></a>
                           <a className="icon-design" href="https://app.netlify.com/sites/panacea-care">Live</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div>
                            <img className="box-img" src={image3} alt="" />
                        </div>
                        <h5>Food Cart</h5>
                        <p>A full-stack health care web app using React, Node.js, Mongodb, Bootstrap, Heroku</p>
                        <div className="d-flex justify-content-between m-3">
                           <a target="_blank" href="https://github.com/Naim108/Food-Cart"> <i class="fa fa-github icon-design "> Github</i></a>
                           <a target="_blank" className="icon-design" href="https://app.netlify.com/sites/foodcartshop">Live</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div>
                            <img className="box-img" src={image1} alt="" />
                        </div>
                        <h5>Excellent Academy</h5>
                        <p>Excellent Academy is a study matarial web app using Bootstrap,HTML, CSS, Netlify</p>
                        <div className="d-flex justify-content-between m-3">
                           <a target="_blank" href="https://github.com/Naim108/Excellent-academy"> <i class="fa fa-github icon-design "> Github</i></a>
                           <a target="_blank" className="icon-design" href="https://app.netlify.com/sites/excellent-academy">Live</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div>
                            <img className="box-img" src={image4} alt="" />
                        </div>
                        <h5>Sport 360</h5>
                        <p>Sport 360 is a sports web app using Bootstrap,HTML, CSS, Netlify</p>
                        <div className="d-flex justify-content-between m-3">
                           <a target="_blank" href="https://github.com/Naim108/sports360"> <i class="fa fa-github icon-design "> Github</i></a>
                           <a target="_blank" className="icon-design" href="https://app.netlify.com/sites/sports360">Live</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div>
                            <img className="box-img" src={image2} alt="" />
                        </div>
                        <h5>Smart Car</h5>
                        <p>This is an online car ordering site app using React, Node.js, Mongodb, Bootstrap, netlify</p>
                        <div className="d-flex justify-content-between m-3">
                           <a target="_blank" href="https://github.com/Naim108/Smart-Car"> <i class="fa fa-github icon-design "> Github</i></a>
                           <a target="_blank" className="icon-design" href="https://app.netlify.com/sites/smart-car">Live</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;