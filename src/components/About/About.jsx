import './About.css'
import img from '../../Assets/rikkypic.JPG'

function About() {
  
  return (
    <div>
    
        <section id='About' className='about'>
          <h1>About</h1>
          <div className='mycontainer'>
            <div className='mypix'>
              <img src={img} alt='about pic'  />
            </div>
            <div class="about-text">
             <p>My name is Eric Kafui Doe, A Front-end web developer
             I studied Mathematics at the the Kwame Nkrumah University of Science and technology, Ghana.
             After which i took interest in web development.I've built projects using Html, Css,Javascript,React.
            </p>
            <p>Im motivated, hardworking and i enjoy learning web development.</p>
        </div> 
          </div>
          
        </section>
    </div>
  )
}

export default About
                 
   