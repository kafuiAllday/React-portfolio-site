import Navbar from "./Navbar";
import Projects from "./Projects/Projects";



export default function Hero(){
    return(
        <header>
            <Navbar />
            
            <div className="container intro-text">
            <h1>Hello, I'm ERIC</h1>
            <h2>A FRONT END WEB DEVELOPER</h2>
            <a href="#Contact">Contact me</a>
    </div>     
        </header>
    )
} 