import React from "react";
import '../../index.css'

export const Blog = () => {
  return (
    <div>
       <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text">Sejam bem vindos(a)</h1>
                        <p className="lead mb-4">
                            Sejam muito bem vindos(a)! A crocheteria de vocês esta aqui. Estou muito feliz em poder compartilhar um pouco
                            desse trabalho com todos vocês e poder trazer alegria através da arte do crochê.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                    <img src="/assets/images/products/15.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
    </div>
  );
};
