import {MdLocationPin} from "react-icons/md";
import {AiFillStar} from "react-icons/ai";

const TestimonialCard = ({item}) => {
    function limitCharacters(str, length) {
        if (str.length > length) return `${str.substring(0, length)} ...`
        return str
    }

    return (
        <div
            className=" p-1 max-h-fit text-white rounded shadow shadow-2xl my-14 shadow-gray-light custom-shadow bg-secondary ">
            <div className="flex flex-col">
                <div className="image grid items-start lg:mx-4">
                    <img src={item.image} alt={item.name} className="rounded testimonial-image"/>
                </div>
                <div className="flex-1 px-2">
                    <div className="mb-1">
                        <div className="text-white text-2xl font-bold">{item.name}</div>
                        <div className="flex gap-2">
                            <div className="font-bold text-tertiary"><small>{item.position}</small></div>
                            <div className="flex items-baseline"><span
                                className="text-tertiary "><MdLocationPin className="bounce"/></span>{item.location}
                            </div>
                        </div>
                    </div>
                    <div className="text-white">{limitCharacters(item.comment, 600)}</div>
                </div>
            </div>
            <div className="flex justify-between items-baseline mt-1">
                <div className="flex">{[1, 2, 3, 4, 5].map((item) => <span key={item}
                                                                           className="text-tertiary"><AiFillStar/></span>)}</div>
                <div className="font-semibold"><small>{item.date}</small></div>
            </div>
        </div>
    )
}

export default TestimonialCard