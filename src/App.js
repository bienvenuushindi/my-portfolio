import './App.css'
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Navigation from "./components/navigation";
import {useEffect} from "react";
import reveal from "./lib/utils";

function App() {

    useEffect(() => {
        window.addEventListener("scroll", reveal);
    }, [])
    return (
        <>
            <aside>
                <Navigation/>
            </aside>
            <main className="xl:ml-64 overflow-hidden">
                <div className="lg:w-11/12 w-11/12 mx-auto ">
                    <About/>
                    <Portfolio/>
                    <Testimonials/>
                    <Resume/>
                    <Contact/>
                </div>
            </main>
        </>
    );
}

export default App;
