import {accounts} from "../siteData";
import {FaFacebook, FaGithub, FaLinkedin, FaMedium, FaTwitter} from "react-icons/fa";

function SocialMedia({customClasses=''}) {
    const icons = {
        facebook: <FaFacebook/>,
        twitter: <FaTwitter/>,
        linkedin: <FaLinkedin/>,
        medium: <FaMedium/>,
        github: <FaGithub/>,
    }
    return (
        <ul className={`mt-3 grid ${customClasses}`}>
            {accounts.map(item=><li key={item.name} className="flex items-center font-bold"><span className="text-primary bg-secondary p-3 mt-1 mr-2 rounded-3xl hover:text-white">{icons[`${item.key}`]}</span> {item.name}</li>)}
        </ul>
    )
}

export default SocialMedia