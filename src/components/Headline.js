import author from '../image/usb-bush.jpg';
const Headline = () => {
    return (
        <div className="w-full">
            <div className="lg:w-10/12 mx-auto border-2 border-black">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 flex-col border-1 border-black">
                        <div className="">Hi There</div>
                        <div className="">
                            <h1>I'M <span>USHINDI</span></h1>
                            <h5>Software developer / Full-stack developer</h5>
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda atque blanditiis cumque dicta
                                dignissimos, dolor eaque laudantium nesciunt quis repellendus sapiente sequi veritatis.
                                Accusantium dolore excepturi optio soluta tempore!
                            </p>
                        </div>
                        <div className="">
                            <button className="px-6 py-2 rounded bg-black hover:bg-blend-darken text-white ">About me</button>
                        </div>
                    </div>
                    <div className="flex-1 border-1 border-black">
                        <img src={author} alt="Ushindi Bienvenu"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headline