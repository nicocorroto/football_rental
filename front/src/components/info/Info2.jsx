import React from 'react'
import './Info2.css'
import { HiLocationMarker, HiCalendar } from 'react-icons/hi'
import { GiSoccerField } from 'react-icons/gi'


const Info2 = () => {
    return (
        <div className="container mt-5 w-auto">
            <div className='text-center align-items-center'>
                <h2 className='mb-3 border-bottom border-success'>Alquilá en 3 simples pasos</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between align-items-center p-7">
                <div className="col">
                    <div className="card radius-10 border-start border-0 border-3 border-success">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-0 text-secondary">Elegi donde queres jugar</p>
                                </div>
                                <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                                    <HiLocationMarker/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card radius-10 border-start border-0 border-3 border-success">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-0 text-secondary">Elegi dia y hora</p>
                                </div>
                                <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                                <HiCalendar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card radius-10 border-start border-0 border-3 border-success">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <div>
                                    <p className="mb-0 text-secondary">Alquila y paga en la cancha</p>

                                </div>
                                <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                                <GiSoccerField/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info2