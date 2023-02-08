import React, { useState } from 'react'
import './Header2.css'

const Header2 = () => {
    
    const [location, setLocation] = useState("Monteros")

    return (
        <>
            <section className="candidates-profile-bg">
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="candidates-profile-details text-center">
                                <div className='shadow p-3 mb-5 bg-body-tertiary rounded opacity-75 '>
                                    <h1 className="mb-3 ">Juga Siempre</h1>
                                    <h4 className="mb-3 ">alquila facil</h4>
                                </div>
                                <form className="row row-cols-lg-auto text-center g-3 align-items-center">
                                    <div className="col-12">
                                        <div className="input-group">

                                            <div className="input-group-text">Localidad</div>
                                            <input type="text"
                                                className="form-control"
                                                id="inlineFormInputGroupUsername"
                                                value={location}
                                                disabled
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label className="visually-hidden">Cancha</label>
                                        <select className="select">
                                            <option value="1">Futbol 5</option>
                                            <option value="2">Futbol 7</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header2