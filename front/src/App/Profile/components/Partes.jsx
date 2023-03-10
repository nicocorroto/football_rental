import React from 'react'
import Mastil from '../../../img/Mastil.jpg'
import './Partes.css'
import {BsInstagram} from 'react-icons/bs'


const Partes = () => {
    return (
        <div className="container">
            <div className="main-body">
                <div className="card-profile social-prof">
                    <div className="card-body">
                        <div className="wrapper">
                            <img src={Mastil} alt="" className="user-profile" />
                            <h3>El Mastil F5</h3>
                            <p className='p-1'>
                                <a href="https://instagram.com/elmastilf5?igshid=YmMyMTA2M2Y=">
                                    <BsInstagram/>
                                </a>
                            </p>
                        </div>
                        {/*<div className="row ">
                            <div className='d-flex flex-row justify-content-evenly align-items-center'>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthNosotros" aria-expanded="false" aria-controls="collapseWidthNosotros">
                                    Nosotros
                                </button>
                                <a href='Disponibilidad' className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthTable" aria-expanded="false" aria-controls="collapseWidthTable">
                                    Alquilar
                                </a>
                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthTable" aria-expanded="false" aria-controls="collapseWidthTable">
                                    fotos
                                </button>
                            </div>

                            <div>
                                <div className="collapse collapse-horizontal" id="collapseWidthNosotros">
                                    <div className="card card-body" >
                                        <h6>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim in id vel porro! A, corporis aspernatur impedit eaque consequatur dolores officiis quasi autem distinctio commodi sequi temporibus. Sed, qui.
                                            Numquam quia soluta non nostrum rem amet a atque aut provident, quo aliquam rerum quod repellendus qui ea eum asperiores recusandae exercitationem eos quidem dolor! Adipisci perspiciatis harum veniam quae.
                                            Quae eaque similique eligendi expedita corrupti numquam velit ea voluptate. Reprehenderit deserunt ducimus corrupti excepturi est non cumque repellendus! Suscipit, velit? Illo ab eaque cum officia excepturi, quae numquam corrupti!
                                            Nesciunt deserunt sunt dolore, minus ut laboriosam voluptas nemo accusamus impedit, incidunt quae, non perspiciatis expedita ipsam porro debitis quidem ipsa quas! Sit iste nulla, sed numquam ut similique vel!
                                            Error ab quos ut quae, accusantium eveniet mollitia, quis animi ad blanditiis placeat iure laudantium nisi corporis voluptatem eaque magni eos, deserunt provident dolorem. Veniam sapiente accusantium nulla sunt debitis?
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Partes