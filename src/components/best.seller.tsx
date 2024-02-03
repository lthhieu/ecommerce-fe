import { apiFetchProducts } from "@/config/api";
import { tab } from "@/config/constant";
import { IProducts } from "@/config/data.type";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState<IProducts[]>([])
    const [newArrivals, setNewArrivals] = useState<IProducts[]>([])
    const [activeTab, setActiveTab] = useState(1)
    useEffect(() => {
        fetchProducts()
    }, []);
    const fetchProducts = async () => {
        const res = await Promise.all([apiFetchProducts(`current=1&pageSize=5&sort=-sold`), apiFetchProducts(`current=1&pageSize=5`)])
        if (res[0] && res[0].data) setBestSeller(res[0].data?.result)
        if (res[1] && res[1].data) setNewArrivals(res[1].data?.result)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const addCommas = (num: string) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = (num: number) => num.toString().replace(/[^0-9]/g, "");
    return (<div>
        <div className="flex text-xl text-tab font-semibold uppercase gap-5 border-b-2 border-red pb-3">
            {tab.map(item => {
                return (
                    <span onClick={() => setActiveTab(item.id)} key={item.id} className={`cursor-pointer pr-5 ${item.id === activeTab ? 'opacity-100' : 'opacity-50'} ${item.id === tab.length ? '' : 'border-r-2'}`}>{item.value}</span>)
            })}
        </div>
        <div className="mt-4 ml-[-20px] mr-[-30px]">
            <Slider {...settings} >
                {bestSeller.map(item => {
                    return (
                        <div key={item._id} className="pl-5">
                            <div className="border w-[240px] flex flex-col py-4 pl-4">
                                <img src={item.thumb} alt="photo" className="w-full" />
                                <div className="flex flex-col gap-2 mt-4">
                                    <span className="text-product line-clamp-1">{item.title}</span>
                                    <span className="text-price">{addCommas(removeNonNumeric(item.price))} VND</span>
                                    <span >{item.sold}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>)
}
export default BestSeller