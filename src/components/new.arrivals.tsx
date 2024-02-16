import { collections } from "@/config/constant"
import { useEffect, useState } from "react"
import { apiFetchProducts } from "@/config/api"
import { IProducts } from "@/config/data.type"
import Slider from "react-slick"
import ProductElement from "./product.element"
const NewArrivals = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const [products, setProducts] = useState<IProducts[]>([])
    const [smartphones, setSmartphones] = useState<IProducts[]>([])
    const [tablets, setTablets] = useState<IProducts[]>([])
    const [laptops, setLaptops] = useState<IProducts[]>([])
    useEffect(() => {
        fetchProducts()
    }, []);
    useEffect(() => {
        if (activeTab === 1) setProducts(smartphones)
        if (activeTab === 2) setProducts(tablets)
        if (activeTab === 3) setProducts(laptops)
    }, [activeTab]);
    const fetchProducts = async () => {
        const [smartphones, tablets, laptops] = await Promise.all([apiFetchProducts(`current=1&pageSize=6&category=65b07a7513ffefd90ae01315`), apiFetchProducts(`current=1&pageSize=6&category=65b07a7f13ffefd90ae01318`), apiFetchProducts(`current=1&pageSize=6&category=65b07a8613ffefd90ae0131b`)])
        if (smartphones && smartphones.data) setSmartphones(smartphones.data?.result)
        if (tablets && tablets.data) setTablets(tablets.data?.result)
        if (laptops && laptops.data) setLaptops(laptops.data?.result)
        setActiveTab(1)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (<div className="w-main flex flex-col">
        <div className="flex justify-between py-4 border-b-2 border-red w-full mt-2">
            <span className="capitalize text-xl text-tab font-semibold">
                new arrivals</span>
            <div className="flex gap-6 text-collection">
                {collections.map(item => {
                    return (
                        <span onClick={() => setActiveTab(item.id)} key={item.id} className={`cursor-pointer capitalize pl-6 ${item.id !== 1 ? 'border-l' : ''} hover:text-red ${item.id === activeTab ? 'text-red' : ''}`}>{item.value}</span>)
                })}
            </div>
        </div>
        <div className="mt-4 pr-1 -ml-5">
            <Slider {...settings} >
                {products.length > 0 && products.map(item => {
                    return (
                        <ProductElement key={item._id} product={item} activeTab={activeTab} newArrival={true} />
                    )
                })}
            </Slider>
        </div>
    </div>)
}
export default NewArrivals