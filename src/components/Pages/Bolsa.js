import React from "react";
import { NavLink } from "react-router-dom";
import "./sapatinho.css";

export const Bolsa = () => {
    return (
        <div>
            <div class="row">
                <div class="pricing-column col-lg-4 col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <span className="title">Bolsa Feminina Crochê Luxo</span>
                        </div>
                        <div class="card-body">
                            <img className="img2" src="/assets/images/products/bolsaverde.jpeg" class="d-block w-100" alt="IPhone" height="400px" />
                        </div>
                        <h4 className="preço">R$ 50.00</h4>
                        <p className="preço">Confeccionada em uma das cores da tendência 2023, aproveite!</p>
                        <p>Indicada para festas, ocasiões mais formais</p>
                        <p>Mostra que você compõe um look mais delicado, sofisticado, elegante</p>
                        <h4>Dados Técnicos:</h4>
                        <p>- Cestinho multiuso em técnica de crochê com fio de malha </p>
                        <h4>DETALHES DO PRODUTO:</h4>
                        <p>100% a mão feito com fio de malha de ótima qualidade, macio. São fios que seriam descartados de uma indústria têxtil e que são reaproveitados sendo transformados em uma linda peça, colaborando com o meio ambiente</p>
                        <p>Cor Verde bandeira</p>
                        <p>29cm alça de mão</p>
                        <p>Tassel 19cm</p>
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
