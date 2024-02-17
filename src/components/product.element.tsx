import { IProducts } from "@/config/data.type"
import { useState } from "react"
import { addCommas, convertNumberToList, removeNonNumeric } from "@/config/helper";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import SelectOption from "./select.option";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { path } from "@/config/constant";

interface IProps {
    product: IProducts,
    activeTab: number,
    newArrival?: boolean
}

const ProductElement = (props: IProps) => {
    const { product, activeTab, newArrival } = props
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
        <div key={product._id} className="pl-5 animate-fade-in">
            <Link to={`${path.PRODUCTS}/${product.slug}_${product._id}.html`} className="border flex flex-col py-4 pl-4 relative rounded-md"
                onMouseEnter={() => { setIsShow(true) }} onMouseLeave={() => { setIsShow(false) }}>
                <img src={product.thumb} alt="photo" />
                {isShow && <div className="absolute bottom-[15%] flex gap-2 justify-center w-full animate-slide-top">
                    <SelectOption icon={<FaHeart />} />
                    <SelectOption icon={<IoMdMenu />} />
                    <SelectOption icon={<FaEye />} />
                </div>}
                {newArrival ? <></> : <span className={`absolute top-0 left-0 ${activeTab === 1 ? 'bg-yellow' : 'bg-info'} px-3 py-[1px] rounded-md font-medium text-white`}>{activeTab === 1 ? 'Trending' : 'New'}</span>}
                <div className="flex flex-col gap-2 mt-4">
                    <span className="text-product line-clamp-1">{product.title}</span>
                    <div className="flex gap-1">{convertNumberToList(product.totalRating).map((product, index) => {
                        return (
                            <span key={index} className="text-yellow text-xs">
                                {product === 1 ? <BsStarFill /> : product === 0 ? <BsStar /> : <BsStarHalf />}
                            </span>
                        )
                    })}</div>
                    <span className="text-price">{addCommas(removeNonNumeric(product.price))} VND</span>
                </div>
            </Link>
        </div>
    )
}
export default ProductElement