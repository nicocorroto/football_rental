import { HiLocationMarker, HiCalendar } from 'react-icons/hi'
import { GiSoccerField } from 'react-icons/gi'

const Info = () => {
    return (
        <section className='mt-9'>
            <div className='p-5 text-center align-items-center'>
                <h2 className='mb-3 border-bottom border-success'>Alquilá en 3 simples pasos</h2>
            </div>
            <div className='row gx-5 m-3'>
                <div className='col m-2 '>
                    <div className='card align-items-center border border-success'>
                        <HiLocationMarker className='mt-3'/>
                        <div className='card-body'>
                            <h5 className='card-title'>Elegí donde querés jugar</h5>
                        </div>
                    </div>
                </div>
                <div className='col m-2'>
                    <div className='card align-items-center border border-success'>
                        <HiCalendar className='mt-3'/>
                        <div className='card-body'>
                            <h5 className='card-title'>Elegí fecha y hora</h5>
                        </div>
                    </div>
                </div>
                <div className='col m-2'>
                    <div className='card align-items-center border border-success'>
                        <GiSoccerField className='mt-3'/>
                        <div className='card-body'>
                            <h5 className='card-title'>Alquilá y pagá en la cancha</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info