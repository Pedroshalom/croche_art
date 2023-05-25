import React from "react";
import '../../index.css'
import Footer from "../Footer";

export const Home = () => {
  return (
    <>
    <>
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div className='hero-container'>
            <p className='p1'>Especialista em lembrancinhas, kit higiene e bolsas</p>
            <p className='p2'>Enviamos para todo o Brasil</p>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img className="img2" src="/assets/images/products/11.png" class="d-block w-100" alt="IPhone" height="400px" />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </><div>

        <Footer />
      </div></>
  );
};
