import logo from '../assets/logo_digital_new_250x.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const Header = () => {
    return (<div className="w-main border-b h-[100px] py-[35px] px-5"
    ><div className="w-full flex justify-between">
            <div className="w-[25%]"><Link to={'/'}><img src={logo} alt='digital-world' /></Link></div>
            <div className="w-[75%] flex items-center justify-end gap-5 text-black">
                <div className='flex flex-col items-center'>
                    <span className='text-[13px] font-semibold flex gap-2 items-center'><FaPhoneAlt className='text-red' />  (+1800) 000 8808</span>
                    <span className='text-sm'>Mon-Sat 9:00AM - 8:00PM</span></div>
                <div className='border-l-2 pl-5 flex flex-col items-center'>
                    <span className='text-[13px] font-semibold flex gap-2 items-center'><MdEmail className='text-red' />  SUPPORT@TADATHEMES.COM</span>
                    <span className='text-sm'>Online Support 24/7</span></div>
                <div className='border-l-2 pl-5'><GoHeart className='text-red text-xl' /></div>
                <div className='border-l-2 pl-5 flex items-center gap-2 text-sm'>
                    <HiShoppingBag className='text-red text-xl' />0 item</div>
            </div></div></div>)
}
export default Header