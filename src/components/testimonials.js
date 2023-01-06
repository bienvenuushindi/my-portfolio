import Title from "./title";
import {testimonials} from "../siteData";
import Slider from "./slide";
const Testimonials = () => {
    return (
        <section id="testimonials" className=" flex-col">
            <Title title="Testimonials"/>
            <div className="my-10 w-full px-4 reveal" >
                <Slider testimonials={testimonials || []} />
            </div>
        </section>
    )
}
export default Testimonials