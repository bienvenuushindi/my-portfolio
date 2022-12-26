import Title from "./title";
import {testimonials} from "../siteData";
import TestimonialCard from "./items/testimonialCard";
import Carousel from "./carousel";

const Testimonials = () => {
    const list = testimonials.map((item, index) => <TestimonialCard key={`testimonial-${index}`} item={item}/> )
    return (
        <section className="lg:m-10 flex-col">
            <Title title="Testimonials"/>
            {/*<div className="grid grid-cols-2  gap-6 mt-10 ">*/}
            {/*    {list}*/}
            {/*</div>*/}
            <div className="mt-5" >
                <Carousel items={list} />
            </div>
        </section>
    )
}
export default Testimonials