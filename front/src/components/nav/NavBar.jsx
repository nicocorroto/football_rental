import {FaRegFutbol} from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success-subtle">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <FaRegFutbol className='mx-1'/>
                    Futbol y Amigos
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page">¿Como funciona nuestra App?</a>
                        <a className="nav-link">Ayuda</a>
                        <a className="nav-link">Registrarse</a>
                        <a className="nav-link">Ingresar</a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar