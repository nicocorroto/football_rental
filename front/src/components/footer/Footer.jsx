import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container mt-2">
                <div className="text-center align-items-center mt-2 ml-8">
                    <div className="col-xs-12 col-sm-4 col-md-4 mt-2align-items-center">
                        <h5>Liks de Pagina</h5>
                        <ul className="list-unstyled quick-links">
                            <li><a href=""><i className="fa fa-angle-double-right"></i>Inicio</a></li>
                            <li><a href=""><i className="fa fa-angle-double-right"></i>Nosotros</a></li>
                            <li><a href=""><i className="fa fa-angle-double-right"></i>Canchas Disponibles</a></li>
                            <li><a href=""><i className="fa fa-angle-double-right"></i>Contactarnos</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                            <p className="h6">&copy All right Reversed. <a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Nicolas Corroto</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer