import React from "react";
import '../../index.css'

export const Home = () => {
  return (
    <><div>
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
    <footer>
        <div class="container-footer">
          <div class="row-footer">
            <div class="footer-col">
              <div class="medias-socias">
                <a href="face"> <i class="fa fa-facebook"></i> </a>
                <a href="https://www.instagram.com/artecrochenatal/"> <i class="fa fa-instagram"></i> </a>
                <a href="https://api.whatsapp.com/send?phone=5584999096035&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos."> <i class="fa fa-whatsapp"></i> </a>
                {/* <a href="#"> <i class="fa fa-twitter"></i> </a> */}
              </div>
              <p className="finish">Arte Crochê</p>

            </div>
          </div>
        </div>
      </footer>
      </>
  );
};
