import './Projects.css'
import IMG from '../../Assets/food2.jpg'

function Projects() {
  return (
    <section id='Projects' className='proj'>
      <h1>Projects</h1>
      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="img_cont">
            <img src={IMG} alt="" />
          </div>
          <h3>Restaurant website</h3>
          <div className="cta_buttons">
            <a href="">Github</a>
            <a href="">View</a>
          </div>       
        </article>
        <article className="portfolio_item">
          <div className="img_cont">
            <img src={IMG} alt="" />
          </div>
          <h3>Restaurant website</h3>
          <div className="cta_buttons">
            <a href="">Github</a>
            <a href="">View</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="img_cont">
            <img src={IMG} alt="" />
          </div>
          <h3>Restaurant website</h3>
          <div className="cta_buttons">
            <a href="">Github</a>
            <a href="">View</a>
            
          </div>
              
        </article>  
      </div>
    </section>
  )
}

export default Projects
