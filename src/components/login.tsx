import { apiLogin, apiRegister } from "@/config/api"
import { capitalizeFirstLetter } from "@/config/helper"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { errorS, successT } from "@/config/custom.toast";

const Login = () => {
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
            const res = await apiLogin(data)
            if (!res.data) {
                errorS(capitalizeFirstLetter(res.message))
            } else {
                localStorage.setItem('access_token', res.data?.access_token);
                navigate('/');
            }
        } else {
            const res = await apiRegister(dataSubmit)
            if (!res.data) {
                let mess = ''
                res.message.forEach((i: string) => { mess += `${capitalizeFirstLetter(i)}, ` })
                errorS(mess)
            } else {
                setDataSubmit({
                    ...dataSubmit,
                    firstName: '',
                    lastName: '',
                    password: '',
                    mobile: ''
                })
                setIsLogin(true)
                successT('Register successfully!')
            }
        }
    }
    return (<div className="bg-white w-[40%] rounded-md p-8 border shadow-md flex flex-col items-center">
        <div className="text-red text-2xl tracking-widest uppercase font-semibold mb-4">{isLogin ? 'login' : 'register'}</div>
        <div className="w-full">
            {!isLogin && <><div className="flex flex-col">
                <span>First name</span>
                <input value={dataSubmit.firstName} name='firstName' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="First name" />
            </div>
                <div className="flex flex-col">
                    <span>Last name</span>
                    <input value={dataSubmit.lastName} name='lastName' onChange={handleChangeInput} onKeyDown={handlePressEnter} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Last name" />
                </div></>}
            <div className="flex flex-col">
                <span>Email</span>
                <input value={dataSubmit.email} name='email' onChange={handleChangeInput} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Email" />
            </div>
            <div className="flex flex-col">
                <span>Password</span>
                <input value={dataSubmit.password} name='password' onChange={handleChangeInput} onKeyDown={handlePressEnter} type="password" className="p-2 my-2 outline-none border rounded-md" placeholder="Password" />
            </div>
            {!isLogin && <div className="flex flex-col">
                <span>Phone number</span>
                <input value={dataSubmit.mobile} name='mobile' onChange={handleChangeInput} onKeyDown={handlePressEnter} type="text" className="p-2 my-2 outline-none border rounded-md" placeholder="Phone number" />
            </div>}
        </div>
        <div className="w-full"><button onClick={handleSignIn} className="bg-red py-2 mt-4 rounded-md text-white uppercase tracking-wide w-full">{isLogin ? 'login' : 'register'}</button></div>
        <div className={`flex ${isLogin ? 'justify-between' : 'justify-center'} w-full mt-4 text-sm`}>
            {isLogin && <><span className="hover:text-red">Forgot your password?</span>
                <span onClick={() => { setIsLogin(false); setDataSubmit(defaultDataSubmit) }} className="hover:text-red cursor-pointer">Create account</span></>}
            {!isLogin && <span onClick={() => { setIsLogin(true); setDataSubmit(defaultDataSubmit) }} className="hover:text-red cursor-pointer">Go Login</span>}
        </div>
    </div>)
}
export default Login