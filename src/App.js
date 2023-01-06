import './App.css'
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Navigation from "./components/navigation";
import {useEffect} from "react";

function App() {

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 80;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", reveal);
    },[])
    return (
        <>
            <aside>
                <Navigation />
            </aside>
            <main className="xl:ml-64 overflow-hidden">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <About />
                    <Portfolio/>
                    <Testimonials/>
                    <Resume />
                    <Contact/>
                </div>
            </main>
        </>
    );
}

export default App;
