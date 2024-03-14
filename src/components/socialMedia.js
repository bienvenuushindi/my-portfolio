import {accounts} from "../siteData";
import {FaGithub, FaLinkedin, FaMedium} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {XTwitter} from "./icons/x-twitter";

function SocialMedia({customClasses = '', showIconText = false}) {
    const icons = {
        twitter: <XTwitter/>, linkedin: <FaLinkedin/>, medium: <FaMedium/>, github: <FaGithub/>, gmail: <GrMail/>,
    }
    return (<ul className={`mt-3 grid ${customClasses}`}>
        {accounts.map(item => <li key={item.name} className="flex items-center font-bold"><a href={item.link}
                                                                                             target="_blank"
                                                                                             rel="noreferrer noopener"
                                                                                             className="flex items-center"><span
            className={`${item.key === 'twitter' ? 'bg-tertiary hover:bg-white p-1' : 'p-2'} text-tertiary bg-secondary  mt-1 mr-2 rounded-2xl hover:text-white`}>{icons[`${item.key}`]}</span> {showIconText && item.name}
        </a></li>)}
    </ul>)
}

export default SocialMedia