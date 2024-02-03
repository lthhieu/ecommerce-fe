import { apiFetchProducts } from "@/config/api";
import { tab } from "@/config/constant";
import { IProducts } from "@/config/data.type";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addCommas, convertNumberToList, removeNonNumeric } from "@/config/helper";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState<IProducts[]>([])
    const [newArrivals, setNewArrivals] = useState<IProducts[]>([])
    const [products, setProducts] = useState<IProducts[]>([])
    const [activeTab, setActiveTab] = useState(0)
    useEffect(() => {
        fetchProducts()
    }, []);
    useEffect(() => {
        if (activeTab === 1) setProducts(bestSeller)
        if (activeTab === 2) setProducts(newArrivals)
    }, [activeTab]);
    const fetchProducts = async () => {
        const res = await Promise.all([apiFetchProducts(`current=1&pageSize=5&sort=-sold`), apiFetchProducts(`current=1&pageSize=5`)])
        if (res[0] && res[0].data) setBestSeller(res[0].data?.result)
        if (res[1] && res[1].data) setNewArrivals(res[1].data?.result)
        setActiveTab(1)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (<div>
        <div className="flex text-xl text-tab font-semibold uppercase gap-5 border-b-2 border-red pb-3">
            {tab.map(item => {
                return (
                    <span onClick={() => setActiveTab(item.id)} key={item.id} className={`cursor-pointer pr-5 ${item.id === activeTab ? 'opacity-100' : 'opacity-50'} ${item.id === tab.length ? '' : 'border-r-2'}`}>{item.value}</span>)
            })}
        </div>
        <div className="mt-4 ml-[-20px] mr-[-30px]">
            <Slider {...settings} >
                {products.length > 0 && products.map(item => {
                    return (
                        <div key={item._id} className="pl-5">
                            <div className="border w-[240px] flex flex-col py-4 pl-4 relative rounded-md">
                                <img src={item.thumb} alt="photo" className="w-full" />
                                <span className={`absolute top-0 left-0 ${activeTab === 1 ? 'bg-yellow' : 'bg-info'} px-3 py-[1px] rounded-md font-medium text-white`}>{activeTab === 1 ? 'Trending' : 'New'}</span>
                                <div className="flex flex-col gap-2 mt-4">
                                    <span className="text-product line-clamp-1">{item.title}</span>
                                    <div className="flex gap-1">{convertNumberToList(item.totalRating).map((item, index) => {
                                        return (
                                            <span key={index} className="text-yellow text-xs">
                                                {item === 1 ? <BsStarFill /> : item === 0 ? <BsStar /> : <BsStarHalf />}
                                            </span>
                                        )
                                    })}</div>
                                    <span className="text-price">{addCommas(removeNonNumeric(item.price))} VND</span>
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