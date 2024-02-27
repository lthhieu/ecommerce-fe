import { IoMdMail } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CgGoogle } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcDinersClub } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
const Footer = () => {
    return (<>
        <div className="w-full flex items-center justify-center bg-red">
            <div className="w-main flex items-center flex-col justify-center py-6">
                <div className="w-full flex items-center justify-between text-white">
                    <div className="flex flex-4 flex-col">
                        <span className="capitalize text-xl">sign up to newsletter</span>
                        <span className="opacity-60 text-sm">Subscribe now and receive weekly newsletter</span>
                    </div>
                    <div className="flex-4">
                        <div className="w-full relative">
                            <input className=" w-full text-sm h-[50px] rounded-[30px] px-5 border-none outline-none bg-[rgba(255,255,255,.1)] placeholder:text-search" type="text" placeholder="Email address" />
                            <IoMdMail color="white" size={24} className="absolute top-[25%] right-0 mr-5" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="w-full flex items-center justify-center bg-black py-12 text-[13px] text-footer">
            <div className="w-main flex justify-center">
                <div className="w-[40%]">
                    <div className="flex gap-3 mb-5 capitalize">
                        <div className="bg-red w-[3px]"></div>
                        <div className="capitalize text-white text-[15px] font-semibold">about us</div>
                    </div>
                    <ul>
                        <li className="flex items-center gap-2 text-white mb-2"><PiMapPinFill /> <span className="text-footer"><strong className="text-white">Address</strong>: 474 Ontario St Toronto, ON M4X 1M7 Canada</span> </li>
                        <li className="flex items-center gap-2 text-white mb-2"><FaPhoneAlt /> <span className="text-footer"><strong className="text-white">Phone</strong>: &#40;+1234&#41;56789xxx</span> </li>
                        <li className="flex items-center gap-2 text-white mb-2"><MdEmail /> <span className="text-footer"><strong className="text-white">Mail</strong>: tadathemes@gmail.com</span> </li>
                    </ul>
                    <div className="flex gap-2 mt-4">
                        <span className="w-[40px] h-[40px] rounded-md bg-[rgba(255,255,255,.1)] flex items-center justify-center"><FaFacebookF className="text-white" size={16} /></span>
                        <span className="w-[40px] h-[40px] rounded-md bg-[rgba(255,255,255,.1)] flex items-center justify-center"><FaTwitter className="text-white" size={16} /></span>
                        <span className="w-[40px] h-[40px] rounded-md bg-[rgba(255,255,255,.1)] flex items-center justify-center"><FaPinterest className="text-white" size={16} /></span>
                        <span className="w-[40px] h-[40px] rounded-md bg-[rgba(255,255,255,.1)] flex items-center justify-center"><CgGoogle className="text-white" size={16} /></span>
                        <span className="w-[40px] h-[40px] rounded-md bg-[rgba(255,255,255,.1)] flex items-center justify-center"><FaLinkedinIn className="text-white" size={16} /></span>
                        <span className="w-[40px] h-[40px] rounded-md bg-[rgba(255,255,255,.1)] flex items-center justify-center"><FaFlickr className="text-white" size={16} /></span>
                    </div>
                </div>
                <div className="w-[60%] flex">
                    <div className="w-1/3 pl-5">
                        <div className="flex gap-3 mb-5 capitalize">
                            <div className="bg-red w-[3px]"></div>
                            <div className="capitalize text-white text-[15px] font-semibold">information</div>
                        </div>
                        <ul>
                            <li className="mb-2">Typography</li>
                            <li className="mb-2">Gallery</li>
                            <li className="mb-2">Store Location</li>
                            <li className="mb-2">Today's Deals</li>
                            <li className="mb-2">Contact</li>
                        </ul>
                    </div>
                    <div className="w-1/3 pl-5">
                        <div className="flex gap-3 mb-5 capitalize">
                            <div className="bg-red w-[3px]"></div>
                            <div className="capitalize text-white text-[15px] font-semibold">who we are</div>
                        </div>
                        <ul>
                            <li className="mb-2">Help</li>
                            <li className="mb-2">Free Shipping</li>
                            <li className="mb-2">FAQs</li>
                            <li className="mb-2">Return & Exchange</li>
                            <li className="mb-2">Testimonials</li>
                        </ul>
                    </div>
                    <div className="w-1/3 pl-5">
                        <div className="flex gap-3 mb-5 capitalize">
                            <div className="bg-red w-[3px]"></div>
                            <div className="capitalize text-white text-[15px] font-semibold">#digitalworldstore</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="w-full py-5 text-xs bg-dark text-footer flex justify-center"
        ><div className="w-main flex justify-between items-center">
                <div>&copy; 2024, Digital World 2 Powered by Shopify</div>
                <div className="text-white flex gap-6">
                    <SiVisa size={50} />
                    <FaCcMastercard size={50} />
                    <SiAmericanexpress size={50} />
                    <FaCcPaypal size={50} />
                    <FaCcDinersClub size={50} />
                    <FaCcDiscover size={50} />
                </div></div></div>
    </>)
}
export default Footer