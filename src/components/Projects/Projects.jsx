import './Projects.css'
import IMG from '../../Assets/food2.jpg'

function Projects() {
  return (
    <section id='Projects' className='proj'>
      <h1>Projects</h1>
      <hr></hr>
      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="img_cont">
            <img src={IMG} alt="" />
          </div>
          <h3>Restaurant website</h3>         
            <a className='first_link' href="">View Project</a>
            
        </article>
        <article className="portfolio_item">
          <div className="img_cont">
            <img src={IMG} alt="" />
          </div>
          <h3>Restaurant website</h3>
          <div id='first'>

            <a href="">View Project</a>
          </div>
          
        </article>
        <article className="portfolio_item">
          <div className="img_cont">
            <img src={IMG} alt="" />
          </div>
          <h3>Restaurant website</h3>
          
            <a href="">View Project</a>
          
              
        </article>  
      </div>
    </section>
  )
}

export default Projects
