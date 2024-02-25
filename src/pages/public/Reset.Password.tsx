import { apiResetPassword } from "@/config/api";
import { errorS, successS } from "@/config/custom.toast";
import { capitalizeFirstLetter, convertMess } from "@/config/helper";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
    const [searchParams] = useSearchParams()
    const [password, setPassword] = useState<string>("")
    const resetPassword = async () => {
        const token = searchParams.get('token') || '';
        const res = await apiResetPassword(token, password)
        if (!res.data) {
            errorS(capitalizeFirstLetter(convertMess(res.message)));
        } else {
            successS('Reset password successful. Please login !')
            setPassword("")
        }
    }
    return (
        <div className="p-8 w-1/3">
            <div className="flex flex-col gap-2 border rounded-md p-6 shadow-md">
                <span className="font-semibold text-black my-2">New password</span>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="p-2 outline-none border rounded-md" placeholder="New password" />
                <button onClick={resetPassword} className="bg-red py-2 mt-2 rounded-md text-white uppercase tracking-wide w-1/4">Submit</button>
            </div>
        </div>
    )
}
export default ResetPassword