import Title from "./title";
import {projects} from "../siteData";

const Portfolio = () => {
    return (
        <section id="projects" className="flex-col">
            <Title title="My Latest Projects"/>
            <div
                className="reveal grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6  py-5 my-10 ">
                {projects.map(item => <div key={item.name}
                                           className="bg-secondary flex items-center  flex-col md:flex-row shadow-lg   project-container">
                        {/*<img src={item.screenshot} alt={item.name} className="h-72 w-full"/>*/}
                        <div
                            className=" w-full text-center text-white h-full flex flex-col items-center gap-1 p-3 rounded  sm:gap-2 justify-around px-1 project-element">
                            <h3 className="text-white font-extrabold text-2xl my-1">{item.name}</h3>
                            <p className=" ">{item.description}</p>
                            <ul className="flex flex-wrap gap-1 text-tertiary items-center justify-center">
                                {item.techStack.map(name => <li key={name} style={{padding: '2px', fontSize: '12px'}}
                                                                className="rounded border shadow uppercase font-bold">{name}</li>)}
                            </ul>
                            <ul className="flex flex-wrap gap-1 text-white my-2">
                                <li><a href={item.live} target="_blank" rel="noreferrer noopener"
                                       className="py-1 px-3 font-bold rounded text-secondary bg-tertiary">Live</a></li>
                                <li><a href={item.github} target="_blank" rel="noreferrer noopener"
                                       className="py-1 px-3 font-bold rounded text-secondary bg-tertiary">Github</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
export default Portfolio