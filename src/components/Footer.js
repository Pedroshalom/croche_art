import React from "react";
import "./Footer.css";

function Footer() {
    return (

        <>
        <footer id="rodape">
            <div>
                <div className="row">
                    <div class="medias-socias">
                        <a className="face" href="face"> <i class="fa fa-facebook"></i> </a>
                        <a className="ins" href="https://www.instagram.com/artecrochenatal/"> <i class="fa fa-instagram"></i> </a>
                        <a className="whatts" href="https://api.whatsapp.com/send?phone=5584999096035&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos."> <i class="fa fa-whatsapp"></i> </a>
                        {/* <a href="#"> <i class="fa fa-twitter"></i> </a> */}
                    </div>
                    <p className="col-sm">
                        Arte Crochê
                    </p>
                </div>
            </div>
            </footer>
        </>
    )
}

export default Footer;
