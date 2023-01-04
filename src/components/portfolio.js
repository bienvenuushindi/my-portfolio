import Title from "./title";
import {projects} from "../siteData";
import {FaHandPointer} from "react-icons/fa";

const Portfolio = () => {
    return (
        <section id="projects" className="flex-col">
            <Title title="SOME of My Projects"/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-3 py-5 my-10">
                {projects.map(item => <div key={item.name}  data-aos="fade-up" className="bg-secondary flex items-center shadow-lg border border-primary relative project-container">
                   <img src={item.screenshot} alt={item.name} className="h-72 w-full"/>
                    <div className="absolute top-0 w-full text-center text-white h-full bg-secondary flex flex-col items-center justify-around px-1 project-element">
                        <h3 className="text-primary font-extrabold text-2xl">{item.name}</h3>
                        <p className=" ">{item.description}</p>
                        <ul className="flex flex-wrap gap-1 text-tertiary items-center justify-center">
                            {item.techStack.map(item => <li key={item} style={{padding: '2px', fontSize: '12px'}} className="rounded  bg-black shadow uppercase font-bold">{item}</li>)}
                        </ul>
                        <ul className="flex flex-wrap gap-1 text-secondary">
                            <li><a href={item.live} target="_blank" rel="noreferrer noopener" className="py-1 px-3 font-bold rounded bg-tertiary">Live</a></li>
                            <li><a href={item.github} target="_blank" rel="noreferrer noopener" className="py-1 px-3 font-bold rounded bg-tertiary">Github</a></li>
                        </ul>
                    </div>
                    <div className="absolute bottom-2 right-1 p-2 plus-icon shadow-secondary shadow-lg rounded-full bg-secondary text-tertiary text-2xl font-bold"><FaHandPointer className="bip" /></div>
                </div>
                )}
            </div>
        </section>
    )
}
export default Portfolio