import { apiFetchProducts } from "@/config/api";
import { IProducts } from "@/config/data.type";
import { useEffect, useState } from "react";

const WrapperTwo = () => {
    const [bestSeller, setBestSeller] = useState<IProducts[] | null>(null)
    const [newArrivals, setNewArrivals] = useState<IProducts[] | null>(null)
    useEffect(() => {
        fetchProducts()
    }, []);
    const fetchProducts = async () => {
        const res = await Promise.all([apiFetchProducts(`current=1&pageSize=5&sort=-sold`), apiFetchProducts(`current=1&pageSize=5`)])
        if (res[0] && res[0].data) setBestSeller(res[0].data?.result)
        if (res[1] && res[1].data) setNewArrivals(res[1].data?.result)
    }
    console.log(bestSeller, newArrivals)
    return (<div className="border w-main px-5 flex py-2 gap-6"
    ><div className="w-[30%]">Deal daily</div>
        <div className="w-[70%]">best seller</div></div>)
}
export default WrapperTwo