import Title from "./title";
import {education, experience} from "../siteData";
import ResumeItem from "./items/resumeItem";

const Resume = () => {
    const educations = education.map((item, index) => <ResumeItem key={`educ-${index}`} item={item}/>)
    const experiences = experience.map((item, index) => <ResumeItem key={`exp-${index}`} item={item}/>)
    return (
        <section id="resume" className="flex-col">
            <Title title="Resume"/>
            <div className="reveal grid lg:grid-rows-2 mt-20">
                <div className="flex-col border-b-dotted-black my-5 pb-5">
                    <h2 className="font-extrabold lg:text-3xl text-2xl mb-3">Experience</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-2 ">
                        {experiences}
                    </div>
                </div>
                <div className="flex-col my-5 pb-5">
                    <h2 className="font-extrabold lg:text-3xl text-2xl mb-3"> Education</h2>
                    <div className={`grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-2`}>
                        {educations}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Resume