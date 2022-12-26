import Title from "./title";
import skills from "../siteData";
import SkillCard from "./items/skillCard";
import SocialMedia from "./socialMedia";
const About = () => {

    const data = Object.entries(skills).map((item) => {
        const [id, value] = item;
        return <SkillCard key={`skill-${id}}`} name={id} title={value.title} items={value.list} />
    })
    return (
        <section className="lg:m-10 flex-col">
            <Title title="About Me" />
            <div className="h-fit">
                <h2 className="capitalize mt-2 lg:text-3xl text-2xl">
                    I'm
                    <span className="font-extrabold mx-1">
                        Ushindi Bienvenu,
                    </span>
                    <span className="font-light">
                        Software developer / Full-stack developer
                    </span>
                </h2>
                <p className="mt-2">
                    Hi Friends! I'm a Full-Stack web developer with more than <span className={"font-semibold"}> 3 years of experience </span>. I help companies to build
                    effective and optimized web solutions. My proficiency in JavaScript, React, Ruby on Rails and SQL have allowed me
                    to bridge the gap between technical and non-technical audiences. If you have an application you are interested in developing, a feature that you need built or a
                    project that needs coding. I’d love to help with it
                </p>

                <div className="lg:flex w-full h-full my-10 mx-auto bg-secondary pt-4 lg:p-4  text-white ">
                    <ul className="text-white text-center h-full  lg:w-9/12 grid  lg:grid-cols-2 bg-secondary ">
                        {data}
                    </ul>
                    <div className="lg:w-3/12 grid items-start lg:justify-items-center">
                        <div>
                            <h3 className="lg:text-4xl text-2xl text-gray font-bold text-left">Let's connect</h3>
                            <SocialMedia />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About