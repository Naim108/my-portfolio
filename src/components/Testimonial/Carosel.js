import React from 'react';
import './Client.css'
import client1 from '../../images/client1.png'
import client2 from '../../images/client2.png'

const Carosel = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row">
          <div className="col-md-6 card-design">
              <div><img className="image client-img" src={client1} alt="" /></div>
              <h5>Ema Watson</h5>
              <p>CEO,Dev Limited</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil saepe, debitis, voluptatem at.</p>
              </div>
          
          <div className="col-md-6 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, porro.</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Carosel;