import Title from "./title";
import {testimonials} from "../siteData";
// import Slider from "./slide";
import {FaLinkedin} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";

const Testimonials = () => {
    return (
        <section id="testimonials" className=" flex-col">
            <Title title="Testimonials"/>
                <div className="reveal grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6  py-5 my-10 ">
                    {testimonials.map((testimonial, index) => (
                        <div className="bg-bg-tertiary rounded-lg  p-6 bg-secondary flex items-start flex-col  shadow-lg   project-container">
                            <div className="flex items-start  justify-start mb-4">
                                <img src={testimonial.image} alt={testimonial.name}
                                     className="w-20 h-20 rounded-full mr-4"/>
                                <div className="flex flex-col">
                                    <span className="font-semibold">{testimonial.name}</span>
                                    <div className="font-bold text-tertiary"><small>{testimonial.position}</small></div>
                                    <div className="flex items-baseline"><span
                                        className="text-tertiary "><MdLocationPin
                                        className="bounce"/></span>{testimonial.location}
                                    </div>
                                    <a href={testimonial.linkedIn} className="text-blue-500 text-sm no-underline">
                                        <span className="text-tertiary bg-secondary  hover:text-white">
                                            <FaLinkedin size="20"/>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <p className="text-text-tertiary">
                                {testimonial.comment}
                            </p>
                        </div>
                    ))}
                </div>
        </section>
    )
}
export default Testimonials