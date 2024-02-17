import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchCategoriesAsync, selectData } from "@/app/slice/categoriesSlice";
import { apiFetchProducts } from "@/config/api";
import { ICategories, ICollections, IProducts } from "@/config/data.type";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

const HotCollections = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectData)
    const [collections, setCollections] = useState<ICollections[]>([])


    useEffect(() => {
        dispatch(fetchCategoriesAsync(null))
    }, []);
    useEffect(() => {
        if (categories.length > 0)
            fetchCollections()
    }, [categories])


    const fetchCollections = async () => {
        const result = []
        for (let i = 0; i < 6; i++) {
            const res = await Promise.resolve(apiFetchProducts(`current=1&pageSize=100&category=${categories[i]._id}`))
            const data = res.data?.result
            const brands = data.map((element: IProducts) => element.brand);

            let uniqueBrands: ICategories[] = brands.filter((value: ICategories, index: number, self: Array<ICategories>) =>
                index === self.findIndex((t: ICategories) => (
                    t._id === value._id
                ))
            )
            const collections: ICollections = {
                category: {} as ICategories,
                brands: []
            }
            collections.brands = uniqueBrands
            collections.category = categories[i]
            result.push(collections)
        }
        setCollections(result)
    }

    return (
        <div className="w-main flex flex-col">
            <div className="py-4 border-b-2 border-red w-full mt-2">
                <span className="capitalize text-xl text-tab font-semibold">
                    hot collections</span>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
                {collections.length > 0 && collections.map((item, index) => {
                    return (
                        <div key={index} className="w-[32%] border rounded-md mb-6 flex gap-4 p-4">
                            <img className="w-[40%] object-contain" src={item.category.image} alt={item.category.title} />
                            <div className="w-[60%] pl-5 text-black text-sm flex flex-col gap-2">
                                <span className="uppercase font-semibold">{item.category.title}</span>
                                <ul>
                                    {item.brands.map(item => { return (<li className="flex items-center mb-2 text-gray-600" key={item._id}><IoIosArrowForward /> {item.title}</li>) })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default HotCollections