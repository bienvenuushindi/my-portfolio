import './App.css'
import Header from "./components/header";
import Headline from "./components/Headline";
import FloatingList from "./components/floatingList";
import {FaHome, FaUserAlt} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {HiPresentationChartBar, HiSpeakerphone} from "react-icons/hi";
import {IoIosSend} from "react-icons/io";

function App() {
  const pageNavigationIcons = [<FaHome />,<FaUserAlt />,<MdWork />,<HiPresentationChartBar />, <HiSpeakerphone />, <IoIosSend />]
  return (
    <div className="App">
        <header>
            <Header />
            <Headline />
            <FloatingList customClasses="flex-col fixed top-1/3 right-0" icons={pageNavigationIcons} />
        </header>

    </div>
  );
}

export default App;
