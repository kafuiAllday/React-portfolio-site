import './Projects.css'
import IMG from '../../Assets/food2.jpg'
import IMG1 from '../../Assets/money2.jpg'
import IMG2 from '../../Assets/quiz.jpg'
import IMG3 from '../../Assets/alora.jpg'
import IMG4 from '../../Assets/Stopwatch.jpg'


const data = [
  {
    id:1,
    Image: IMG,
    title: 'Food website',
    links:'https://foodie-gsoplezs0-kafuiallday.vercel.app/',
  },
  {
    id:2,
    Image: IMG1,
    title: 'Expense Tracker',
    links:'https://react-expense-tracker-41w16evvd-kafuiallday.vercel.app',
    
  },
  {
    id:3,
    Image: IMG2,
    title: 'Quiz App',
    links:'https://quizy-jdcqayvl8-kafuiallday.vercel.app/',
    
  },
  {
    id:4,
    Image: IMG3,
    title: 'Fitness club',
    links:'https://alwayafitness-jl2m5hwcu-kafuiallday.vercel.app',

  },
  {
    id:5,
    Image: IMG4,
    title: 'Stopwatch',
    links:'https://stopwatch-4fmn-mi0fy4opw-kafuiallday.vercel.app/',
    
  }
  
]
function Projects() {
  
  return (
    <section id='Projects' className='proj'>
      <h1>Project</h1>
      <hr></hr>
      <div className="portfolio_container">
        {data.map(({id,Image,title,links}) => {
          return (
            <article className="portfolio_item" key={id}>
            <div className="img_cont">
              <img src={Image} alt={title} />
            </div>
            <h3>{title}</h3>   
            
              <a className='first_link' href={links}  target='_blank' >View Project</a>
          
          </article>
          )
        })
        
      } 
      </div>
      </section>
  )
}

export default Projects


