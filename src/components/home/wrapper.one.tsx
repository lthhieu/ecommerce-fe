import { useEffect, useState } from "react"
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
import { useAppSelector } from "app/hooks";
import { selectData } from "app/slice/categoriesSlice";
import { ICategories, ICategoriesWithIcons } from "@/config/data.type";

const WrapperOne = () => {
    const categories = useAppSelector(selectData)
    const icons = [<FiPrinter size={22} />, <FaTabletScreenButton size={22} />, <FaLaptopCode size={22} />, <PiTelevisionSimpleBold size={22} />, <FiSmartphone size={22} />, <FaHeadphones size={22} />, <FaCamera size={22} />, <CgMusicSpeaker size={22} />]
    const [categoriesWithIcons, setCategoriesWithIcons] = useState<ICategoriesWithIcons[] | []>([])

    useEffect(() => {
        if (categories.length > 0) {
            setCategoriesWithIcons(categories.map((i: ICategories, idx: number) => {
                return { ...i, icon: icons[idx] }
            }))
        }
    }, [categories])

    return (<div className="w-main flex py-5 gap-6"
    ><div className="w-[30%] flex-col flex border rounded-md">
            <div className="px-5 py-3 text-lg bg-red text-white font-semibold flex gap-4 items-center rounded-tl-md rounded-tr-md"><FaListUl /> ALL COLLECTIONS</div>
            {categoriesWithIcons?.map(item => { return (<NavLink className={'px-5 py-3.5 text-collection flex items-center gap-6 hover:text-red'} to={item.slug || '/'} key={item._id}> {item.icon}{item.title}</NavLink>) })}
        </div>
        <div className="w-[70%] h-[480px]">
            <div className="w-full h-full rounded-md"
                style={{ backgroundImage: "url('https://digital-world-2.myshopify.com/cdn/shop/files/slideshow3-home2_1920x.jpg?v=1613166679')", backgroundSize: 'cover' }}></div>
        </div>
    </div>)
}
export default WrapperOne