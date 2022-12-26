import author from '../image/usb-transparent.png';
import handWaving from '../image/icons/wave-small.png'
const Headline = () => {
    return (
        <div className="grid min-h-screen place-items-center headline">
            <div className="lg:w-10/12 mx-auto min-h-100">
                <div className="flex lg:h-intro flex-col w-100 lg:flex-row">
                    <div className="flex-1 block h-100 image-container">
                        <img src={author} alt="Ushindi Bienvenu" className="h-full w-full"/>
                    </div>
                    <div className="flex-1 h-full  border-1 border-black bg-white  px-2">
                       <div className="h-full grid justify-items-start gap-1 items-center lg:w-10/12 mx-auto">
                           <div className="space-y-5">
                               <div className="text-3xl uppercase flex items-center ">Hi There <img src={handWaving} alt='hand waving' className="w-fit h-fit" /></div>
                               <div className="">
                                   <h1 className="uppercase text-6xl mb-1">I'M <span className="font-extrabold">USHINDI</span></h1>
                                   <h5 className="text-white bg-black w-fit p-1 ">Software developer / Full-stack developer</h5>
                               </div>
                               <div className="">
                                   <p> I'm a Full-Stack web developer with 3 years of experience. I help companies to build
                                       effective and optimized web solutions. I am passionate about technology, innovation, and challenging
                                       tasks on my to-do list.
                                   </p>
                               </div>
                               <div>
                                   <button className="shadow-2xl bg-white :text-black outline  outline-2 outline-black px-6 py-2 hover:bg-black  hover:text-white capitalize">More About me</button>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headline