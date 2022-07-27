import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <div className='icons'>
            
                <a href="https://twitter.com/"><FaTwitter/></a>
                <a href="https://facebook.com"><BsFacebook/></a>
                <a href="https://instagram"><BsInstagram/></a>
      
        </div>
        <div className="copyright_icon">
            <p>&copy; 2022 by Eric Kafui Doe</p>
        </div>
      
    </div>
  )
}

export default Footer
