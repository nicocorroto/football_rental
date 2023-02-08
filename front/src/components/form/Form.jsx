import './Form.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
    return (
        <section>
            
            <h2>Contactarnos</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>mariocorroto09@gmail.com</h5>
                        <a href="mailto:mariocorroto09@gmail.com">Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsMessenger className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Nicolás Corroto</h5>
                        <a href="https://m.me/nicolas.corroto">Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+543863401957</h5>
                        <a href="https://api.whatsapp.com/send?phone=3863401957">Send a message</a>
                    </article>
                </div>
                <form >
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Your Full Name' 
                        required 
                    />
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Your Email' 
                        required 
                    />
                    <textarea 
                        name="message" 
                        cols="30" 
                        rows="7" 
                        placeholder='Your Message'
                    ></textarea>
                    <button 
                        type='submit' 
                        className='btn btn-primary'
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact