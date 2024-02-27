import { useAppSelector } from "@/app/hooks"
import { logoutAction, selectIsAuthenticated, selectUser } from "@/app/slice/profileSlice"
import { path } from "@/config/constant"
import { Link, useNavigate } from "react-router-dom"
import { MdLogout } from "react-icons/md";
import { apiLogout } from "@/config/api";
import { useDispatch } from "react-redux";
import { successS } from "@/config/custom.toast";


const TopHeader = () => {
    const user = useAppSelector(selectUser)
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = async () => {
        const res = await apiLogout();
        if (res && res.data) {
            dispatch(logoutAction());
            successS('Logged out successfully !');
            navigate('/')
        }
    }
    return (<div className="w-full py-[10px] text-xs bg-red text-white flex justify-center"
    ><div className="w-main flex justify-between px-5 ">
            <div>ORDER ONLINE OR CALL US (+1800) 000 8808</div>
            {isAuthenticated ? <div className="flex gap-2 items-center">
                <span>{`${user.firstName} ${user.lastName}`}</span>
                <MdLogout onClick={handleLogout} className="hover:text-tab cursor-pointer" size={18} />
            </div> :
                <Link to={path.LOGIN} className="hover:text-tab cursor-pointer">Sign In or Create Account</Link>}</div></div>)
}
export default TopHeader