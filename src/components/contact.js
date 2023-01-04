import Title from "./title";
import SocialMedia from "./socialMedia";
import {GrMail} from "react-icons/gr";

const Contact = () => {

    return (
        <section id="contact" className=" flex-col">
            <Title title="Contact"/>
            <div className="my-10">
                <div className="text-3xl my-5">Feel <span className="font-extrabold">free</span> to contact me!</div>
                <p className="mb-10  mt-5 text-2xl">
                    If you have an application you are interested in developing, a feature that you need built or a
                    project that needs coding. I’d love to help with it
                </p>
                <div>
                    <h3 className="lg:text-4xl text-2xl font-bold text-left">Let's connect</h3>
                    <div className="grid lg:grid-cols-2">
                        <SocialMedia customClasses="grid-cols-2" showIconText={true}/>
                        <div>
                            <div className="flex items-center">
                           <span className="text-tertiary bg-black p-3 mt-1 mr-2 rounded-3xl hover:text-white">
                                <GrMail/>
                            </span>
                                <a className="font-bold" href="mailto:jeanbienvenusb@gmail.com">jeanbienvenusb@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact