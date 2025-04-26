import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav >
       <div className="mb-20 flex items-center justify-between py-1">
        <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10"src={logo}alt="logo" /> 
       </div>
       {/* dispaly icons */}
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
         <FaLinkedin/>
         <FaGithub/>
         <FaTwitter size={24}/>
         <FaInstagram/>
       </div>
       </div>
       
    </nav>
  );
};

export default Navbar;
