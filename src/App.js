import './App.css'
// import Header from "./components/header";
// import Headline from "./components/Headline";
import FloatingList from "./components/floatingList";
import {FaHome, FaUserAlt} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {HiPresentationChartBar, HiSpeakerphone} from "react-icons/hi";
import {IoIosSend} from "react-icons/io";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import PageNavigation from "./components/pageNavigation";

function App() {
    const pageNavigationIcons = [<FaHome/>, <FaUserAlt/>, <MdWork/>, <HiPresentationChartBar/>, <HiSpeakerphone/>,
        <IoIosSend/>]
    return (
        <div>
            {/*<header className="border-0 m-0">*/}
            {/*    <Header/>*/}
            {/*    <Headline/>*/}
            {/*    */}
            {/*</header>*/}
            <div className="lg:flex">
                <aside className="hidden flex-none lg:flex w-2/12 bg-dark h-screen sticky top-0">
                    <PageNavigation/>
                </aside>
                <main>
                    <div className="w-10/12 mx-auto">
                        <FloatingList customClasses="flex flex-col fixed lg:top-1/3 h-fit bottom-0 right-0 bg-secondary" icons={pageNavigationIcons}/>
                        <About/>
                        <Resume/>
                        <Portfolio/>
                        <Testimonials/>
                        <Contact/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
