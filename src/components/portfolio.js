import Title from "./title";
import {projects} from "../siteData";
import {FaHandPointer} from "react-icons/fa";

const Portfolio = () => {
    return (
        <section id="projects" className="flex-col">
            <Title title="My Latest Projects"/>
            <div
                className="revea grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6  py-5 my-10 rounded-lg">
                {projects.map(item => <div key={item.name}
                                           className="bg-secondary flex items-center  flex-col md:flex-row shadow-lg   project-container">
                        <img src={item.screenshot} alt={item.name} className="h-72 w-full"/>
                        <div
                            className=" w-full text-center text-white h-full flex flex-col items-center gap-1  sm:gap-2 justify-around px-1 project-element">
                            <h3 className="text-white font-extrabold text-2xl my-1">{item.name}</h3>
                            <p className=" ">{item.description}</p>
                            <ul className="flex flex-wrap gap-1 text-tertiary items-center justify-center">
                                {item.techStack.map(item => <li key={item} style={{padding: '2px', fontSize: '12px'}}
                                                                className="rounded  bg-black shadow uppercase font-bold">{item}</li>)}
                            </ul>
                            <ul className="flex flex-wrap gap-1 text-white my-2">
                                <li><a href={item.live} target="_blank" rel="noreferrer noopener"
                                       className="py-1 px-3 font-bold rounded bg-tertiary">Live</a></li>
                                <li><a href={item.github} target="_blank" rel="noreferrer noopener"
                                       className="py-1 px-3 font-bold rounded bg-tertiary">Github</a></li>
                            </ul>
                        </div>
                        {/*<div className="absolute bottom-2 right-1 p-2 plus-icon shadow-secondary shadow-lg rounded-full bg-secondary text-tertiary text-2xl font-bold"><FaHandPointer className="bip" /></div>*/}
                    </div>
                )}
            </div>
        </section>
    )
}
export default Portfolio