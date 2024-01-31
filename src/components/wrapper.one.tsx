import { useEffect } from "react"
import { apiFetchCategories } from "../config/api";

const WrapperOne = () => {
    const fetchCategories = async () => {
        const response = await apiFetchCategories()
        console.log(response)
    }
    useEffect(() => {
        fetchCategories()
    }, []);
    return (<div className="w-main px-5 flex py-5"
    ><div className="w-[30%]">sidebar</div>
        <div className="w-[70%] h-[480px]">
            <div className="w-full h-full"
                style={{ backgroundImage: "url('https://digital-world-2.myshopify.com/cdn/shop/files/slideshow3-home2_1920x.jpg?v=1613166679')", backgroundSize: 'cover' }}></div>
        </div>
    </div>)
}
export default WrapperOne