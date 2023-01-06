import React, {useState} from 'react';
import '../index.css';
import Image from "../image/usb-transparent.png";
import SocialMedia from "./socialMedia";


const Navigation = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <div className="text-primary bg-secondary">
            <div
                className="fixed top-2 right-2 z-20 flex items-center justify-end w-fit p-3 border rounded shadow-lg bg-secondary xl:hidden ">
                <div aria-label="toggler" className="flex items-center justify-center text-indigo-300">
                    <button type="button" id="open" aria-label="open" onClick={() => setShow(!show)}
                            className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                    <button type="button" id="close" aria-label="close" onClick={() => setShow(!show)}
                            className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div id="Main"
                 className={`${show ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0 transform ease-in-out xl:ease-linear transition duration-500 side__bar`}>
                <div className="h-screen flex flex-col w-full items-center bg-secondary">
                    <div className=" lg:h-80 w-full grid justify-center items-center">
                        <img src={Image} className="object-contain flex-none h-60 w-60  rounded-full  border-primary border-4 border-y-secondary" alt="Ushindi" />
                    </div>
                    <nav className="flex-grow">
                        <ul className="bg-secondary h-full text-primary text-center flex flex-col justify-around navigation">
                            {['about', 'projects','testimonials','resume', 'contact'].map(item => <li key={item} onClick={()=>toggleMenu()} className="font-bold text-2xl  flex  justify-center" ><a href={`#${item}`} className="capitalize">{item}</a></li>)}
                        </ul>
                    </nav>

                    <div className="pb-32 xl:pb-10 w-full flex flex-col items-center justify-start space-x-2 text-primary">
                        <div
                            className="flex px-6 justify-start md:justify-end items-start  w-full md:items-center space-x-6 ">
                            <SocialMedia customClasses="grid-rows-1 justify-center grid-flow-col w-full"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navigation;
