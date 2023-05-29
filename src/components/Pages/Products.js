import React from "react";
import '../../index.css'
import { NavLink } from "react-router-dom";

export const Products = () => {
  return (
    <div>
     <div class="row">
        <div class="container">
          <div class="card">
            <div class="card-header">
              <span className="title">Sapatinho de Bebê em Crochê</span>
            </div>
            <div class="card-body">
              <img className="img2" src="/assets/images/products/sapatinho.jpg" alt="Sapatinho" height="400px" />
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

        <div class="container">
          <div class="card">
            <div class="card-header">
              <span className="title">Cesto Crochê Redondo</span>
            </div>
            <div class="card-body">
            <img className="img2" src="/assets/images/products/cesto.jpg" alt="Cesto" height="400px" />
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

        <div class="container">
          <div class="card">
            <div class="card-header">
              <span className="title">Bolsa Feminina Crochê Luxo</span>
            </div>
            <div class="card-body">
              <img className="img2" src="/assets/images/products/bolsaverde.jpeg" alt="Bolsa" height="400px" />
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


