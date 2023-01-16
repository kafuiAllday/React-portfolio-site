import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

function Contact() {
  return (
    <div>
      <section id='Contact' className='contact'>
        <h1>Contacts</h1>
        
        <div className='container contacts'>
          <div className='socials'>
          <div className='github'>
          <GoMarkGithub className='git'/>
            
            <h4>Github account</h4>
            <h3>kafuiAllday</h3>
            <a href='https://github.com/kafuiAllday' target='_blank'>Github code</a>
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
            <button type='submit' className='contact_btn'><a href='mail.kay4rikki@gmail.com'>Send message</a></button>  
          </form>

          </div> 

      </section>
    
    </div>
  )
}

export default Contact

