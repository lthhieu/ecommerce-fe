import { useEffect, useState } from "react"
import { apiFetchCategories } from "../config/api";
import { ICategories } from "../config/data.type";

const WrapperOne = () => {
    const [categories, setCategories] = useState<ICategories[] | null>(null)
    useEffect(() => {
        fetchCategories()

    }, []);
    const fetchCategories = async () => {
        const res = await apiFetchCategories()
        if (res && res.data) setCategories(res.data)
    }

    console.log('categories', categories)
    return (<div className="w-main px-5 flex py-5"
    ><div className="w-[30%]">sidebar</div>
        <div className="w-[70%] h-[480px]">
            <div className="w-full h-full"
                style={{ backgroundImage: "url('https://digital-world-2.myshopify.com/cdn/shop/files/slideshow3-home2_1920x.jpg?v=1613166679')", backgroundSize: 'cover' }}></div>
        </div>
    </div>)
}
export default WrapperOne