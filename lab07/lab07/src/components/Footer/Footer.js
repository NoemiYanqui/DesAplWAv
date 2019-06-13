import React from 'react';
const Footer = props => {
    return(
        <footer id="footer" className="pb-4 pt-4">
            <div className="container">
                <div className="row text-center">
                <div className="col-12 col-lg">
                        <a href="#">Preguntas frecuentas</a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#">Contáctanos</a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#">Terminos y condiciones</a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#">privacidad</a>
                    </div>
                    <div className="col-12 col-lg">
                        <a href="#">Mi App</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;