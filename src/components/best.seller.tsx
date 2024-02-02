import { apiFetchProducts } from "@/config/api";
import { tab } from "@/config/constant";
import { IProducts } from "@/config/data.type";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BestSeller = () => {
    // const [bestSeller, setBestSeller] = useState<IProducts[] | null>(null)
    // const [newArrivals, setNewArrivals] = useState<IProducts[] | null>(null)
    const [activeTab, setActiveTab] = useState(1)
    // useEffect(() => {
    //     fetchProducts()
    // }, []);
    // const fetchProducts = async () => {
    //     const res = await Promise.all([apiFetchProducts(`current=1&pageSize=5&sort=-sold`), apiFetchProducts(`current=1&pageSize=5`)])
    //     if (res[0] && res[0].data) setBestSeller(res[0].data?.result)
    //     if (res[1] && res[1].data) setNewArrivals(res[1].data?.result)
    // }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (<div className="">
        <div className="flex text-xl text-tab font-semibold uppercase gap-5 border-b-2 border-red pb-3">
            {tab.map(item => {
                return (
                    <span onClick={() => setActiveTab(item.id)} key={item.id} className={`cursor-pointer pr-5 ${item.id === activeTab ? 'opacity-100' : 'opacity-50'} ${item.id === tab.length ? '' : 'border-r-2'}`}>{item.value}</span>)
            })}
        </div>
        <div className="mt-4">
            <Slider {...settings}>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">1</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">2</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">3</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">4</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">5</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">6</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">7</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">8</div>
                </div>
                <div className="pl-5">
                    <div className="border w-[240px] h-[240px] flex items-center justify-center p-4">9</div>
                </div>
            </Slider>
        </div>
    </div>)
}
export default BestSeller