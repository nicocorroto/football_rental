import React from 'react'
import Mastil from '../../img/Mastil.jpg'

const Card2 = () => {
    return (

        <div className="container mt-5">
            <div className='text-center align-items-center'>
                <h2 className='mb-3 border-bottom border-success'>Canchas disponibles</h2>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-4 mb-3 mb-lg-5">

                    <div className="card overflow-hidden text-center">
                        <img src={Mastil} className="card-img-top img-fluid" alt="" />

                        <div className="card-body p-0">

                            <h5 className="mb-0 pt-3">
                                <a href="#!.html" className="text-reset">El Mastil F5</a>
                            </h5>
                            {/*
                            Crear map para recorrer y hacer y hacer las cards dinamicas

                            <div className="row mx-0 border-top border-bottom">
                                <div className="col-6 text-center border-end py-3">
                                    <h5 className="mb-0">2345</h5>
                                    <small className="text-muted">Followers</small>
                                </div>
                                <div className="col-6 text-center py-3">
                                    <h5 className="mb-0">54</h5>
                                    <small className="text-muted">Following</small>
                                </div>
                            </div>*/}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                                    <span className="text-muted small">Ubicacion</span>
                                    <a href="https://goo.gl/maps/Kxd3kMpyMmi8Tfci6"><strong>Cabildo 700, Monteros</strong></a>
                                </li>
                                <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                                    <span className="text-muted small d-flex align-items-center">
                                        <span className="align-middle lh-1 me-1 size-5 border border-4 border-success rounded-circle d-inline-block"></span>
                                        Disponible
                                    </span>
                                    <div className="text-end">
                                        <a href="#!.html" className="btn btn-sm btn-primary">Alquilar</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-4 mb-3 mb-lg-5">

                    <div className="card overflow-hidden text-center">
                        <img src={Mastil} className="card-img-top img-fluid" alt="" />

                        <div className="card-body p-0">

                            <h5 className="mb-0 pt-3">
                                <a href="#!.html" className="text-reset">El Mastil F5</a>
                            </h5>
                            {/*
                            Crear map para recorrer y hacer y hacer las cards dinamicas

                            <div className="row mx-0 border-top border-bottom">
                                <div className="col-6 text-center border-end py-3">
                                    <h5 className="mb-0">2345</h5>
                                    <small className="text-muted">Followers</small>
                                </div>
                                <div className="col-6 text-center py-3">
                                    <h5 className="mb-0">54</h5>
                                    <small className="text-muted">Following</small>
                                </div>
                            </div>*/}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                                    <span className="text-muted small">Ubicacion</span>
                                    <a href="https://goo.gl/maps/Kxd3kMpyMmi8Tfci6"><strong>Cabildo 700, Monteros</strong></a>
                                </li>
                                <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                                    <span className="text-muted small d-flex align-items-center">
                                        <span className="align-middle lh-1 me-1 size-5 border border-4 border-success rounded-circle d-inline-block"></span>
                                        Disponible
                                    </span>
                                    <div className="text-end">
                                        <a href="#!.html" className="btn btn-sm btn-primary">Alquilar</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-md-4 mb-3 mb-lg-5">

                    <div className="card overflow-hidden text-center">
                        <img src={Mastil} className="card-img-top img-fluid" alt="" />

                        <div className="card-body p-0">

                            <h5 className="mb-0 pt-3">
                                <a href="#!.html" className="text-reset">El Mastil F5</a>
                            </h5>
                            {/*
                            Crear map para recorrer y hacer y hacer las cards dinamicas

                            <div className="row mx-0 border-top border-bottom">
                                <div className="col-6 text-center border-end py-3">
                                    <h5 className="mb-0">2345</h5>
                                    <small className="text-muted">Followers</small>
                                </div>
                                <div className="col-6 text-center py-3">
                                    <h5 className="mb-0">54</h5>
                                    <small className="text-muted">Following</small>
                                </div>
                            </div>*/}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                                    <span className="text-muted small">Ubicacion</span>
                                    <a href="https://goo.gl/maps/Kxd3kMpyMmi8Tfci6"><strong>Cabildo 700, Monteros</strong></a>
                                </li>
                                <li className="list-group-item px-3 d-flex align-items-center justify-content-between">
                                    <span className="text-muted small d-flex align-items-center">
                                        <span className="align-middle lh-1 me-1 size-5 border border-4 border-success rounded-circle d-inline-block"></span>
                                        Disponible
                                    </span>
                                    <div className="text-end">
                                        <a href="#!.html" className="btn btn-sm btn-primary">Alquilar</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2