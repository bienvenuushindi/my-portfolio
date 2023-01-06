import skills from "../siteData";
import SkillCard from "./items/skillCard";
import handWaving from "../image/icons/wave-small.png";
const About = () => {

    const data = Object.entries(skills).map((item) => {
        const [id, value] = item;
        return <SkillCard key={`skill-${id}}`} name={id} title={value.title} items={value.list} />
    })
    return (
        <section id="about" className=" flex-col ">
            <div className="h-fit  my-10 lg:mt-20 ">
                <div className="h-full grid justify-items-start gap-1 items-center" >
                    <div className="space-y-5">
                        <div className="lg:text-3xl text-2xl uppercase flex items-center ">Hi There <img src={handWaving} alt='hand waving' className="lg:w-fit lg:h-fit h-8 w-8" /></div>
                        <div className="mb-5">
                            <h1 className="uppercase lg:text-6xl text-3xl  mb-1">I'M <span className="font-extrabold">USHINDI</span></h1>
                            <h5 className="text-tertiary font-extrabold bg-secondary w-fit p-1 rounded">Software developer / Full-stack developer</h5>
                        </div>
                        <div className="lg:text-3xl text-secondary">
                            <p> I'm a Full-stack web developer with  3+ years of experience. I can help you build a product , feature or website.
                                Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex w-full h-full my-10 mx-auto bg-secondary pt-4 pl-2 lg:p-10 my-24 text-white rounded ">
                    <ul className="text-white text-center h-full  w-full grid  lg:grid-cols-2 bg-secondary ">
                        {data}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default About