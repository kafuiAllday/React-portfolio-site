import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


function Contact() {
  return (
    <div>
      <section id='Contact' className='contact'>
        <h1>Contacts</h1>
        <div className='contacts'>
          <div className='socials'>
          <div className='Wa'>
            <BsWhatsapp className='wsap'/>
            <h4>Whatsapp</h4>
            <h3>0245051247</h3>
            <a href='https://api.whatsapp.com/send?phone+233245051247'>Send a message</a>
          </div>
          <div className='Mail'>
            <MdOutlineEmail className='email'/>
            <h4>Email</h4>
            <h3>kay4rikki@gmail</h3>
          
          </div>
          </div>
          <form action=''>
            <input type='text' placeholder='Your Full Name' name='name' required/>
            <input type='email' placeholder='Email' name='email' required/>
            <textarea name='message' rows='7' placeholder='Your message' required>
            </textarea>
            <button type='submit' className='contact_btn'>Send message</button>  
          </form>

          </div> 

      </section>
    
    </div>
  )
}

export default Contact

