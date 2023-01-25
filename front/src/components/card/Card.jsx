import React from 'react'
import Mastil from '../../img/Mastil.jpg'

const Card = () => {
    return (
        <div className='container px-4 text-center'>
            <div className='row gx-5 m-8'>
                <div className='col m-3'>
                    <div className='card'>
                        <img src={Mastil} className='card-img-top' alt="..." />
                        <div className='card-body'>
                            <h5 className='card-title'>El Mastil F5</h5>
                            <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a className='btn btn-primary'>Alquilar</a>
                        </div>
                    </div>
                </div>
                <div className='col m-3'>
                    <div className='card'>
                        <img src={Mastil} className='card-img-top' alt="..." />
                        <div className='card-body'>
                            <h5 className='card-title'>El Mastil F5</h5>
                            <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a className='btn btn-primary'>Alquilar</a>
                        </div>
                    </div>
                </div>
                <div className='col m-3'>
                    <div className='card'>
                        <img src={Mastil} className='card-img-top' alt="..." />
                        <div className='card-body'>
                            <h5 className='card-title'>El Mastil F5</h5>
                            <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a className='btn btn-primary'>Alquilar</a>
                        </div>
                    </div>
                </div>
                <div className='col m-3'>
                    <div className='card'>
                        <img src={Mastil} className='card-img-top' alt="..." />
                        <div className='card-body'>
                            <h5 className='card-title'>El Mastil F5</h5>
                            <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a className='btn btn-primary'>Alquilar</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card