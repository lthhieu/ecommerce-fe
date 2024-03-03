import { useParams } from "react-router-dom"
import Breadcrumbs from "../utils/breadcrumbs"
import { apiFetchProducts } from "@/config/api"
import { useEffect, useState } from "react"
import { selectData } from "@/app/slice/categoriesSlice"
import { useAppSelector } from "@/app/hooks"
import { IProducts } from "@/config/data.type"
import Masonry from 'react-masonry-css'
import ProductElement from "../utils/product.element/product.element"

const Category = () => {
    const [productByCategory, setProductByCategory] = useState<IProducts[] | null>(null)
    const { category } = useParams()
    const categories = useAppSelector(selectData)
    useEffect(() => {
        if (categories.length > 0)
            fetchProductsByCategory()
    }, [categories]);
    const fetchProductsByCategory = async () => {
        const result = categories.find(i => i.slug === category)
        const response = await apiFetchProducts(`current=1&pageSize=100&&category=${result?._id}`)
        if (response.data) {
            setProductByCategory(response.data?.result)
        }
    }
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (<>
        <div className='w-full flex justify-center bg-grey mb-5'>
            <div className='container px-40 py-4 flex flex-col gap-2'>
                <h3 className='uppercase text-tab text-lg font-semibold'>{category?.toLocaleUpperCase()}</h3>
                <Breadcrumbs />
            </div>
        </div>
        <div className="container px-40">
            <div className="mb-7 p-[10px] w-full border border-filter flex items-center justify-between">
                <div className="flex-7">filter by</div>
                <div className="flex-3">
                    <label className="font-semibold text-[16px]">Sort by</label>
                    <div className="mt-2 border border-[rgba(26,27,24.55)]">
                        <select className="w-full h-11 pl-5 pr-7 flex justify-center" name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {productByCategory && productByCategory.length > 0 ?
                        productByCategory.map((item) => {
                            return (
                                <ProductElement key={item._id} product={item} newArrival={true} />
                            )
                        }) : <>no any products</>}
                </Masonry>
            </div>
            <div className="h-[400px]"></div>
        </div>
    </>)
}
export default Category