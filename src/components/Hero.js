import Navbar from "./Navbar";
import Projects from "./Projects/Projects";



export default function Hero(){
    return(
        <header>
            <Navbar />
            <div className="intro-text">
            <h1>Hello, I'm ERIC</h1>
            <h2>A FRONT END WEB DEVELOPER</h2>
            <button className="cta_butt"><a href="#Contact">contact me</a></button>
    </div>

        </header>
    )
}