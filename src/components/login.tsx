import { apiForgotPassword, apiLogin, apiRegister } from "@/config/api"
import { capitalizeFirstLetter, convertMess } from "@/config/helper"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { errorS, successS, successT } from "@/config/custom.toast";
import { useAppDispatch } from "@/app/hooks";
import { fetchProfileAsync } from "@/app/slice/profileSlice";
import { IoHomeOutline } from "react-icons/io5";
import { path } from "@/config/constant";
import Swal from 'sweetalert2'


const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const defaultDataSubmit = {
        email: '',
        password: ''
    }
    const [dataSubmit, setDataSubmit] = useState(defaultDataSubmit)
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataSubmit({
            ...dataSubmit,
            [e.target.name]: e.target.value
        })
    }
    const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSignIn()
    }
    const handleSignIn = async () => {
        const data = { username: dataSubmit.email, password: dataSubmit.password }
        try {
            const res = await apiLogin(data)
            if (!res.data) {
                errorS(capitalizeFirstLetter(convertMess(res.message)));
            } else {
                localStorage.setItem('access_token', res.data?.access_token);
                dispatch(fetchProfileAsync(null))
                navigate('/');
            }
        } catch (err) { errorS(capitalizeFirstLetter('Oops! Something wrong happened')) }
    }
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
            <div className="flex flex-col">
                <span>Email</span>
                <input value={dataSubmit.email} name='email' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Email" />
            </div>
            <div className="flex flex-col">
                <span>Password</span>
                <input value={dataSubmit.password} name='password' onChange={handleChangeInput} onKeyDown={handlePressEnter} type="password" className="p-2 my-2 outline-none border rounded-md" placeholder="Password" />
            </div>
        </div>
        <div className="w-full"><button onClick={handleSignIn} className="bg-red py-2 mt-4 rounded-md text-white uppercase tracking-wide w-full">login</button></div>
        <div className={`flex justify-between w-full mt-4 text-sm`}>
            <span className="hover:text-red cursor-pointer" onClick={handleClick}>Forgot your password?</span>
            <Link to={`/${path.REGISTER}`} onClick={() => { setDataSubmit(defaultDataSubmit) }} className="hover:text-red cursor-pointer">Create account</Link>
        </div>
    </div>)
}
export default Login