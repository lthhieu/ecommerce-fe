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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: ''
    }
    const [dataSubmit, setDataSubmit] = useState(defaultDataSubmit)
    const [isLogin, setIsLogin] = useState<boolean>(true)
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
        if (isLogin) {
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
        } else {
            const res = await apiRegister(dataSubmit)
            if (!res.data) {
                errorS(capitalizeFirstLetter(convertMess(res.message)));
            } else {
                setDataSubmit(defaultDataSubmit)
                setIsLogin(true)
                successS('Confirm Email To Activate Your Account')
            }
        }
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
            <span>{isLogin ? 'login' : 'register'}</span>
            <span><IoHomeOutline color="#fff" /></span>
        </div>
        <div className="w-full">
            {!isLogin && <><div className="flex flex-col">
                <span>First name</span>
                <input value={dataSubmit.firstName} name='firstName' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="First name" />
            </div>
                <div className="flex flex-col">
                    <span>Last name</span>
                    <input value={dataSubmit.lastName} name='lastName' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Last name" />
                </div>
                <div className="flex flex-col">
                    <span>Phone number</span>
                    <input value={dataSubmit.mobile} name='mobile' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Phone number" />
                </div></>}
            <div className="flex flex-col">
                <span>Email</span>
                <input value={dataSubmit.email} name='email' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Email" />
            </div>
            <div className="flex flex-col">
                <span>Password</span>
                <input value={dataSubmit.password} name='password' onChange={handleChangeInput} onKeyDown={handlePressEnter} type="password" className="p-2 my-2 outline-none border rounded-md" placeholder="Password" />
            </div>
        </div>
        <div className="w-full"><button onClick={handleSignIn} className="bg-red py-2 mt-4 rounded-md text-white uppercase tracking-wide w-full">{isLogin ? 'login' : 'register'}</button></div>
        <div className={`flex ${isLogin ? 'justify-between' : 'justify-center'} w-full mt-4 text-sm`}>
            {isLogin && <><span className="hover:text-red cursor-pointer" onClick={handleClick}>Forgot your password?</span>
                <span onClick={() => { setIsLogin(false); setDataSubmit(defaultDataSubmit) }} className="hover:text-red cursor-pointer">Create account</span></>}
            {!isLogin && <span onClick={() => { setIsLogin(true); setDataSubmit(defaultDataSubmit) }} className="hover:text-red cursor-pointer">Go Login</span>}
        </div>
    </div>)
}
export default Login