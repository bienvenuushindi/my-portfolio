import Image from '../image/usb-transparent.png'
const PageNavigation = () => {
    return (
        <section id="page-navigation" className="w-full" >
            <div className="h-screen flex flex-col justify-items-start bg-primary">
                <img src={Image} className="object-contain flex-none" alt="Ushindi" />
                <ul className="flex-grow bg-secondary text-primary text-center flex flex-col justify-around navigation">
                    {['About Me','Resume','Portfolio','Testimonials','Contact'].map(item => <li key={item} className="font-bold text-2xl  flex  justify-center" >{item}</li>)}
                </ul>
            </div>
        </section>
    )
}
export default PageNavigation