import React from 'react'
import Mastil from '../../../img/Mastil.jpg'
import './Partes.css'


const Partes = () => {
    return (
        <div className="container">
            <div className="main-body">
                <div className="card-profile social-prof">
                    <div className="card-body">
                        <div className="wrapper">
                            <img src={Mastil} alt="" className="user-profile" />            
                            <h3>El Mastil F5</h3>
                            <p></p>
                        </div>
                        <div className="row ">
                            <div className="col-lg-12">
                                <ul className=" nav nav-tabs justify-content-center s-nav">
                                    <li><a href="#">Nosotros</a></li>
                                    <li><a className="active" href="#">Instagram</a></li>
                                    <li><a href="#">Alquilar</a></li>
                                    <li><a href="#">Fotos</a></li>
                                    <li><a href="#">Videos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Partes