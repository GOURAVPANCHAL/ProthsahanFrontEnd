import React, { useEffect } from 'react'

import img1 from '../images/carousel1.jpg'
import img2 from '../images/carousel2.jpg'
import img3 from '../images/carousel3.jpg'
import img4 from '../images/carousel4.jpg'
import img5 from '../images/carouselProthsahan.jpg'
import '../HomeCarousel/carousel.css'

const carousel = () => {
  return (
    <>
    <div  id="CExampleControls" class="carousel slide" interval={1000} data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className=''>
      <img src={img1} class="d-block w-100" alt="..." />
        {/* <h1>hello prothsahan</h1> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block w-100" height={'100%'} alt="..." />
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
    </>
  )
}

export default carousel