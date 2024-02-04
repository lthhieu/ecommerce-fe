import { apiFetchProducts } from "@/config/api";
import { tab } from "@/config/constant";
import { IProducts } from "@/config/data.type";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductElement from "./product.element";
const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState<IProducts[]>([])
    const [newArrivals, setNewArrivals] = useState<IProducts[]>([])
    const [products, setProducts] = useState<IProducts[]>([])
    const [activeTab, setActiveTab] = useState<number>(0)
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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (<div>
        <div className="flex text-xl text-tab font-semibold uppercase gap-5 border-b-2 border-red pb-3 ml-5">
            {tab.map(item => {
                return (
                    <span onClick={() => setActiveTab(item.id)} key={item.id} className={`cursor-pointer pr-5 ${item.id === activeTab ? 'opacity-100' : 'opacity-50'} ${item.id === tab.length ? '' : 'border-r-2'}`}>{item.value}</span>)
            })}
        </div>
        <div className="mt-4 pr-0.5">
            <Slider {...settings} >
                {products.length > 0 && products.map(item => {
                    return (
                        <ProductElement key={item._id} product={item} activeTab={activeTab} />
                    )
                })}
            </Slider>
        </div>
        <div className="mt-4 flex gap-4 ml-5 justify-between">
            <div><img className="object-cover rounded-md" src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-home2_2000x_crop_center.png?v=1613166657" alt="banner-home-1" />
            </div>
            <div><img className="object-cover rounded-md" src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-home2_2000x_crop_center.png?v=1613166657" alt="banner-home-2" />
            </div>
        </div>
    </div>)
}
export default BestSeller