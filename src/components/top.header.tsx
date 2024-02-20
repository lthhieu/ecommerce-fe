import { path } from "@/config/constant"
import { Link } from "react-router-dom"

const TopHeader = () => {
    return (<div className="w-full py-[10px] text-xs bg-red text-white flex justify-center"
    ><div className="w-main flex justify-between px-5 ">
            <div>ORDER ONLINE OR CALL US (+1800) 000 8808</div>
            <Link to={path.LOGIN} className="hover:text-tab cursor-pointer">Sign In or Create Account</Link></div></div>)
}
export default TopHeader