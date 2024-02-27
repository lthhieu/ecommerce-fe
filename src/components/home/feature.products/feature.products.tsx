import { apiFetchProducts } from "@/config/api"
import { IProducts } from "@/config/data.type"
import { useEffect, useState } from "react"
import ProductCard from "./product.card/product.card"

const FeatureProduct = () => {
    const [features, setFeatures] = useState<IProducts[]>([])
    useEffect(() => {
        fetchFeatures()
    }, [])
    const fetchFeatures = async () => {
        const res = await apiFetchProducts(`current=1&pageSize=9&totalRating=5`)
        if (res && res.data) {
            setFeatures(res.data?.result)
        }
    }
    return (<div className="w-main flex flex-col">
        <span className="capitalize text-xl text-tab font-semibold py-4 border-b-2 border-red w-full">
            feature products</span>
        <div className="flex flex-wrap justify-between">
            {features.length > 0 && features.map((item, index) => {
                return (
                    <ProductCard key={item._id} index={index + 1}
                        thumb={item.thumb} title={item.title} totalRating={item.totalRating} price={item.price} />
                )
            })}
        </div>
        <div className="flex gap-4 mt-6">
            <div className="w-1/2">
                <img className="object-cover w-full h-full rounded-md" src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661" alt="picture" /></div>
            <div className="flex flex-col w-1/4 justify-between">
                <img className="rounded-md" src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661" alt="picture" />
                <img className="rounded-md" src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661" alt="picture" />
            </div>
            <div className="w-1/4"><img className="object-cover w-full h-full rounded-md" src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661" alt="picture" /></div>
        </div>
    </div>)
}
export default FeatureProduct