import { apiFetchProducts } from "@/config/api";
import { IProducts } from "@/config/data.type";
import { addCommas, convertNumberToList, removeNonNumeric } from "@/config/helper";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const DealDaily = () => {
    const [dealDaily, setDealDaily] = useState<IProducts | null>(null)
    const fetchDealDaily = async () => {
        const response = await apiFetchProducts(`current=1&pageSize=100&totalRating=5`)
        if (response.data) setDealDaily(response.data?.result[Math.floor(Math.random() * response.data?.meta.total) + 1])
    }
    useEffect(() => {
        fetchDealDaily()
    }, [])
    return (<div>
        <div className="flex items-center justify-between mb-5">
            <BsStarFill className="text-red flex-1" />
            <span className="flex-8 text-black text-xl uppercase font-semibold flex items-center justify-center tracking-widest">Daily Deals</span>
            <span className="flex-1"></span>
        </div>
        {dealDaily && <div className="flex flex-col items-center gap-3 absolute bottom-0">
            <img src={dealDaily.thumb} alt="photo" className="object-cover w-[80%] h-[80%]" />
            <span className="text-product line-clamp-1">{dealDaily.title}</span>
            <div className="flex gap-1">{convertNumberToList(dealDaily.totalRating).map((product, index) => {
                return (
                    <span key={index} className="text-yellow text-sm">
                        {product === 1 ? <BsStarFill /> : product === 0 ? <BsStar /> : <BsStarHalf />}
                    </span>
                )
            })}</div>
            <span className="text-price">{addCommas(removeNonNumeric(dealDaily.price))} VND</span>
            <div className="flex gap-2 w-[80%]">
                <div className="flex-1 flex flex-col items-center bg-time py-[10px] px-[10px] text-tab"><span className="font-semibold text-lg">0</span><span className="text-xs text-time">Hours</span></div>
                <div className="flex-1 flex flex-col items-center bg-time py-[10px] px-[10px] text-tab"><span className="font-semibold text-lg">0</span><span className="text-xs text-time">Minutes</span></div>
                <div className="flex-1 flex flex-col items-center bg-time py-[10px] px-[10px] text-tab"><span className="font-semibold text-lg">0</span><span className="text-xs text-time">Seconds</span></div>
            </div>
            <button className="bg-red text-white py-2 mt-2 flex items-center gap-2 px-4 rounded-md hover:bg-icon mb-5 w-[80%] justify-center"><IoMdMenu /> Option</button>
        </div>}
    </div>)
}
export default DealDaily