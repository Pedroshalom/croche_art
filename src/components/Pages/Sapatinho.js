import React from "react";
import { NavLink } from "react-router-dom";
import "./sapatinho.css";

export const Sapatinho = () => {
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
                        <h4 className="preço">R$ 50.00</h4>
                        <p className="preço">Lindo Sapatinho de crochê para acompanhar sua bebê desde os primeiros dias de vida! </p>
                        <h4>DETALHES DO PRODUTO:</h4>
                        <p>- Confeccionado em tricô;  </p>
                        <p> - Enfeite imitando cadarço de tênis;</p>
                        <p> - Tamanho P: 0 a 3 meses;  </p>
                        <h4>INSTRUÇÕES DE LAVAGEM:</h4>
                        <p>- Lavar a mão;</p>
                        <p>- Usar sabão neutro;</p>
                        <p>- Secar a sombra.</p>
                        <button class="btn" type="button" >
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="link"
                            >
                                Voltar
                            </NavLink>
                        </button>

                        <button class="btn" type="button" >
                            <span>Comprar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
