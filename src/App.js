import './App.css'
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Navigation from "./components/navigation";

function App() {
    return (
        <>
            <aside>
                <Navigation />
            </aside>
            <main className="xl:ml-64">
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
