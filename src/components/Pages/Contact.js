import React from "react";
import './contact.css';

export const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>
                            Tem alguma pergunta?</h1>
                    </div>
                </div>
                <div className="row">
                    <div class="wrapper">
                        <form aclassName="contact" action="https://formsubmit.co/pedroshalommrn@hotmail.com"
                            method="POST">
                            <input className='focus-input' type="hidden" name="_next" value="http://localhost:3000/contact" />
                            <input type="hidden" name="_captcha" value="false" />
                            <div class="dbl-field">
                                <div class="field">
                                    <i class='fas fa-user'></i>

                                    <input className="space" type="text" name='name'  class="form-control" id="exampleForm" placeholder="Seu nome aqui" />
                                </div>
                                <div class="field">
                                    <i class='fas fa-envelope'></i>

                                    <input className="space" type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                            </div>
                            <div class="dbl-field">
                                <div class="field">
                                    <i class='fas fa-phone-alt'></i>

                                    <input className="space" type='tel' name='phone' class="form-control" placeholder='Telefone'></input>
                                </div>
                            </div>
                            <div class="message">
                            <i class='fa fa-pencil'></i>
                                
                                <textarea className="texatrea"  type="text" required placeholder="Write your message" name="message" rows="7" maxlength="30"></textarea>
                               
                            </div>
                            <div class="button-area">
                                <button className="btn" type="submit"  class="w-100 btn btn-lg btn-dark">
                                    <span>Enviar</span>
                                </button>
                                <span></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};


