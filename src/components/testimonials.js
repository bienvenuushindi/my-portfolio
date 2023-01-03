import Title from "./title";
import {testimonials} from "../siteData";
import Slider from "./slide";
const Testimonials = () => {
    return (
        <section className="lg:m-10 flex-col">
            <Title title="Testimonials"/>
            <div className="mt-5 w-full px-4 " >
                <Slider testimonials={testimonials || []} />
            </div>
        </section>
    )
}
export default Testimonials