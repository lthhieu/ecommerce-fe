import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { path } from "@/config/constant";
import RegisterForm from "./register.form";


const Register = () => {
    return (<div className="bg-white w-[40%] rounded-md p-8 border shadow-md flex flex-col items-center">
        <div className="text-red text-2xl tracking-widest uppercase font-semibold mb-4 flex justify-between w-full items-center">
            <Link to={path.HOME}><IoHomeOutline /></Link>
            <span>register</span>
            <span><IoHomeOutline color="#fff" /></span>
        </div>
        <div className="w-full">
            <RegisterForm />
        </div>
        <div className={`flex justify-center w-full mt-4 text-sm`}>
            <Link to={`/${path.LOGIN}`} className="hover:text-red cursor-pointer">Go Login</Link>
        </div>
    </div>)
}
export default Register