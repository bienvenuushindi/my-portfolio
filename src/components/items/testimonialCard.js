import {MdLocationPin} from "react-icons/md";
import {AiFillStar} from "react-icons/ai";

const TestimonialCard = (props) => {
    const {item} = props
    function limitCharacters(str, length){
      if( str.length > length ) return `${str.substring(0, length)} ...`
      return  str
    }
    return (
        <div className=" p-1 max-h-fit text-white rounded shadow shadow-2xl shadow-gray-light custom-shadow bg-secondary">
            <div className="flex flex-col">
                <div className="image grid items-start lg:mx-4">
                    <img src={item.image} alt={item.name} className="rounded testimonial-image"/>
                </div>
                <div className="flex-1 px-2">
                    <div className="mb-1">
                        <div className="text-primary text-2xl font-bold">{item.name}</div>
                        <div className="flex gap-2">
                            <div className="font-bold"><small>{item.position}</small></div>
                            <div className="flex items-baseline"><span
                                className="text-primary "><MdLocationPin className="bounce"/></span>{item.location}</div>
                        </div>
                    </div>
                    <div className="text-white">{limitCharacters(item.comment,600)}</div>
                </div>
            </div>
            <div className="flex justify-between items-baseline mt-1">
                <div className="flex">{[1, 2, 3, 4, 5].map((item) => <span key={item}
                                                                           className="text-primary"><AiFillStar/></span>)}</div>
                <div className="font-semibold"><small>{item.date}</small></div>
            </div>
        </div>
    )
}

export default TestimonialCard