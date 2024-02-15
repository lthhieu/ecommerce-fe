import { addCommas, convertNumberToList, removeNonNumeric } from "@/config/helper"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

interface IProps {
    index: number,
    thumb: string,
    title: string,
    totalRating: number,
    price: number,
}
const ProductCard = (props: IProps) => {
    const { price, thumb, title, totalRating, index } = props
    return (<div className={`w-1/3 pt-6 ${index === 2 || index === 5 || index === 8 ? 'px-8' : ''}`}>
        <div className="border rounded-md p-4 flex gap-8">
            <img src={thumb} width={90} height={90} alt={title} />
            <div className="flex flex-col gap-2 mt-4">
                <span className="text-product line-clamp-1">{title}</span>
                <div className="flex gap-1">{convertNumberToList(totalRating).map((product, index) => {
                    return (
                        <span key={index} className="text-yellow text-xs">
                            {product === 1 ? <BsStarFill /> : product === 0 ? <BsStar /> : <BsStarHalf />}
                        </span>
                    )
                })}</div>
                <span className="text-price">{addCommas(removeNonNumeric(price))} VND</span>
            </div>
        </div>
    </div>)
}
export default ProductCard