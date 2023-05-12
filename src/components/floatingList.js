import CV from '../doc/Resume.pdf'

const Download = ({name}) => {
    return (
        <>
            <div>
                <a href={CV} target="_blank" rel="noopener noreferrer"
                   className=" flex gap-2 items-center  hover:text-white hover:animate-none text-secondary bg-tertiary hover:bg-tertiary-500 focus:outline-none focus:ring-4 focus:ring-tertiary-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2">{name}
                    <svg aria-hidden="true" className="w-4 h-4 animate-ping" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </a>
            </div>
        </>
    )
}

export default Download