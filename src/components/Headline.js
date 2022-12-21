import author from '../image/usb-bush.jpg';
import handWaving from '../image/icons/wave-small.png'
const Headline = () => {
    return (
        <div className="grid h-screen place-items-center headline shadow-2xl ">
            <div className="lg:w-10/12 mx-auto h-fit border-2 border-dark">
                <div style={{height: '70vh'}} className="flex w-100  flex-col lg:flex-row bg-white">
                    <div className="flex-1 h-full  border-1 border-black  px-2">
                       <div className="h-full grid justify-items-start gap-1 items-center lg:w-10/12 mx-auto">
                           <div className="space-y-5">
                               <div className="text-3xl uppercase flex items-center ">Hi There <img src={handWaving} alt='hand waving' className="w-fit h-fit" /></div>
                               <div className="">
                                   <h1 className="uppercase text-6xl mb-1">I'M <span className="font-extrabold">USHINDI</span></h1>
                                   <h5 className="text-white bg-black w-fit p-1 ">Software developer / Full-stack developer</h5>
                               </div>
                               <div className="">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque blanditiis cumque dicta
                                       dignissimos, dolor eaque laudantium nesciunt quis repellendus sapiente sequi veritatis.
                                       Accusantium dolore excepturi optio soluta tempore!
                                   </p>
                               </div>
                               <div className="">
                                   <button className="px-6 py-2 rounded bg-black hover:bg-blend-darken text-white  capitalize">More About me</button>
                               </div>
                           </div>

                       </div>
                    </div>
                    <div className="flex-1 block h-100 border-1 border-black">
                        <img src={author} alt="Ushindi Bienvenu" className="h-full w-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headline