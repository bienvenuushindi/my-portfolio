import {accounts} from "../siteData";
import {FaGithub, FaLinkedin, FaMedium, FaTwitter} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

function SocialMedia({customClasses = '', showIconText=false}) {
    const icons = {
        twitter: <FaTwitter/>,
        linkedin: <FaLinkedin/>,
        medium: <FaMedium/>,
        github: <FaGithub/>,
        gmail: <GrMail/>,
    }
    return (
        <ul className={`mt-3 grid ${customClasses}`}>
            {accounts.map(item => <li key={item.name} className="flex items-center font-bold"><a href={item.link} target="_blank" rel="noreferrer noopener"  className="flex items-center"><span
                className="text-tertiary bg-secondary p-3 mt-1 mr-2 rounded-3xl hover:text-white">{icons[`${item.key}`]}</span> {showIconText && item.name}
            </a></li>)}
        </ul>
    )
}

export default SocialMedia