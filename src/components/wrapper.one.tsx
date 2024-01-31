import { useEffect, useState } from "react"
import { apiFetchCategories } from "../config/api";
import { ICategories } from "../config/data.type";
import { NavLink } from "react-router-dom";
import { FaListUl } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { FiSmartphone } from "react-icons/fi";
import { FaTabletScreenButton } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { CgMusicSpeaker } from "react-icons/cg";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const WrapperOne = () => {
    const [categories, setCategories] = useState<ICategories[] | null>(null)
    useEffect(() => {
        fetchCategories()

    }, []);
    const fetchCategories = async () => {
        const res = await apiFetchCategories()
        //@ts-ignore
        if (res && res.data) setCategories(res.data)
    }
    return (<div className="w-main px-5 flex py-5 gap-6"
    ><div className="w-[30%] flex-col flex border">
            <div className="px-5 py-3 text-lg bg-red text-white font-semibold flex gap-4 items-center"><FaListUl /> ALL COLLECTIONS</div>
            {categories?.map(item => { return (<NavLink className={'px-5 py-3.5 text-collection flex items-center gap-4 hover:text-red'} to={item.slug} key={item._id}> <FaHeadphones />{item.title}</NavLink>) })}
        </div>
        <div className="w-[70%] h-[480px]">
            <div className="w-full h-full"
                style={{ backgroundImage: "url('https://digital-world-2.myshopify.com/cdn/shop/files/slideshow3-home2_1920x.jpg?v=1613166679')", backgroundSize: 'cover' }}></div>
        </div>
    </div>)
}
export default WrapperOne