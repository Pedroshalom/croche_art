import React from "react";
import '../../index.css'
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div>
     <div class="row">
        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <span className="title">Sapatinho de Bebê em Crochê</span>
            </div>
            <div class="card-body">
              <img className="img2" src="/assets/images/products/sapatinho.jpg" class="d-block w-100" alt="IPhone" height="400px" />
            </div>
            <button class="btn" type="button" >
              <span><NavLink
              className="link"
                exact
                to="/sapatinho"
              >Detalhes
              </NavLink></span>
              </button>
          </div>
        <hr className="hr"/>
        </div>

        <div class="pricing-column col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <span className="title">Cesto Crochê Redondo</span>
            </div>
            <div class="card-body">
            <img className="img2" src="/assets/images/products/cesto.jpg" class="d-block w-100" alt="IPhone" height="400px" />
            </div>
            <button class="btn" type="button" >
              <span><NavLink
              className="link"
                exact
                to="/cestinho"
              >Detalhes
              </NavLink></span>
              </button>
          </div>
          <hr className="hr"/>
        </div>

        <div class="pricing-column col-lg-4 col-md-12">
          <div class="card">
            <div class="card-header">
              <span className="title">Bolsa Feminina Crochê Luxo</span>
            </div>
            <div class="card-body">
              <img className="img2" src="/assets/images/products/bolsaverde.jpeg" class="d-block w-100" alt="IPhone" height="400px" />
            </div>
              <button class="btn" type="button" >
              <span><NavLink
              className="link"
                exact
                to="/bolsa"
              >Detalhes
              </NavLink></span>
              </button>
          </div>
          <hr className="hr"/>
        </div>
      </div>
    </div>
  );
};


