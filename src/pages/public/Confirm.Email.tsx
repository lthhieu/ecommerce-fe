import { apiConfirmEmail } from "@/config/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ConfirmEmail = () => {
    const [searchParams] = useSearchParams()
    const [mess, setMess] = useState<string>("")
    const [ignore, setIgnore] = useState<boolean>(false)
    useEffect(() => {
        confirmEmail()
    }, [])
    const confirmEmail = async () => {
        if (!ignore) {
            const token = searchParams.get('token') || '';
            const res = await apiConfirmEmail(token)
            if (res.data) {
                setMess("Register Successfully, Please Login !")
            } else if (!ignore) {
                setMess("Register Fail, Please Try Again !")
            }
        }
        setIgnore(true)
    }
    return (
        <div className="h-24 p-8">{mess}</div>
    )
}
export default ConfirmEmail