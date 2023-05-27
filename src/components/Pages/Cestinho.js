import React from "react";
import { NavLink } from "react-router-dom";
import "./sapatinho.css";

export const Cestinho = () => {
    return (
        <div>
            <div class="row">
                <div class="pricing-column col-lg-4 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <span className="title">Cesto Crochê Redondo</span>
                        </div>
                        <div class="card-body">
                            <img className="img2" src="/assets/images/products/cesto.jpg" class="d-block w-100" alt="IPhone" height="400px" />
                        </div>
                        <h4 className="preço">R$ 50.00</h4>
                        <p className="preço">Mantenha o quarto organizado com este cestinho. Use o mini cesto de crochê para organizar os itens ou como um porta treco para qualquer coisa! Além de ser um lindo item de decoração para o quarto.</p>
                        <h4>Dados Técnicos:</h4>
                        <p>- Cestinho multiuso em técnica de crochê com fio de malha </p>
                        <h4>Medidas:</h4>
                        <p>- Diâmetro: 15 cm</p>
                        <p>- Altura: 8 cm</p>
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
