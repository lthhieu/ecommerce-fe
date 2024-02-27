import { apiForgotPassword } from "@/config/api"
import { capitalizeFirstLetter } from "@/config/helper"
import { Link } from "react-router-dom";
import { successS } from "@/config/custom.toast";
import { IoHomeOutline } from "react-icons/io5";
import { path } from "@/config/constant";
import Swal from 'sweetalert2'
import LoginForm from "./login.form/login.form";


const Login = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Please enter your email",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Confirm",
            showLoaderOnConfirm: true,
            preConfirm: async (email) => {
                try {
                    const response = await apiForgotPassword(email);
                    if (!response.data) {
                        return Swal.showValidationMessage(capitalizeFirstLetter(response.message));
                    }
                    return response;
                } catch (error) {
                    Swal.showValidationMessage(`
                  Request failed: ${error}
                `);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                successS('Please check your email to reset password !')
            }
        });
    }
    return (<div className="bg-white w-[40%] rounded-md p-8 border shadow-md flex flex-col items-center">
        <div className="text-red text-2xl tracking-widest uppercase font-semibold mb-4 flex justify-between w-full items-center">
            <Link to={path.HOME}><IoHomeOutline /></Link>
            <span>login</span>
            <span><IoHomeOutline color="#fff" /></span>
        </div>
        <div className="w-full">
            <LoginForm />
        </div>
        <div className={`flex justify-between w-full mt-4 text-sm`}>
            <span className="hover:text-red cursor-pointer" onClick={handleClick}>Forgot your password?</span>
            <Link to={`/${path.REGISTER}`} className="hover:text-red cursor-pointer">Create account</Link>
        </div>

    </div>)
}
export default Login