import { selectIsAuthenticated } from "@/app/slice/profileSlice";
import Login from "@/components/login/login"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    useEffect(() => {
        if (isAuthenticated) {
            window.location.href = '/';
        }
    }, [isAuthenticated])
    return (<div className="flex w-full h-full items-center justify-center bg-gradient-to-t from-violet-500 to-fuchsia-500">
        <Login />
    </div>)
}
export default LoginPage