import React from "react";
import '../../index.css'

export const About = () => {
  return (
    <div>
     <div class="row">
        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <span className="title">Sapatinho Vermelho</span>
            </div>
            <div class="card-body">
              <img className="img2" src="/assets/images/products/sapatinho.jpg" class="d-block w-100" alt="IPhone" height="400px" />
            </div>
              <h4 className="preço">R$ 50.00</h4>
              <button class="btn" type="button" >
              <span>Comprar</span>
              </button>
          </div>
        <hr className="hr"/>
        </div>

        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <span className="title">cesto</span>
            </div>
            <div class="card-body">
            <img className="img2" src="/assets/images/products/cesto.jpg" class="d-block w-100" alt="IPhone" height="400px" />
            </div>
            <h2 className="preço">R$99.00</h2>
              <button type="button" class="w-100 btn btn-lg btn-dark">
              <span>Comprar</span>
              </button>
          </div>
          <hr className="hr"/>
        </div>

        <div class="pricing-column col-lg-4 col-md-12">
          <div class="card">
            <div class="card-header">
              <span className="title">Chinelo</span>
            </div>
            <div class="card-body">
              <img className="img2" src="/assets/images/products/chinelo.jpg" class="d-block w-100" alt="IPhone" height="200px" />
            </div>
              <h2 className="preço">R$99.00</h2>
              <button type="button" class="w-100 btn btn-lg btn-dark">
              <span>Comprar</span>
              </button>
          </div>
          <hr className="hr"/>
        </div>
      </div>
    </div>
  );
};


