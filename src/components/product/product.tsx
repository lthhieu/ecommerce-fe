import { apiFetchProductById } from '@/config/api';
import { IProducts } from '@/config/data.type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from 'components/utils/breadcrumbs';
import ImageGallery from "react-image-gallery";
import { addCommas, convertNumberToList, removeNonNumeric } from '@/config/helper';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaSquare } from "react-icons/fa";
import ExtraInfo from '../utils/extra.info';


const Product = () => {
    let { id } = useParams();
    const pid = id?.split('_')[1].split('.')[0] || '';
    const [product, setProduct] = useState<IProducts | null>(null)
    const [quantity, setQuantity] = useState<number>(1)
    const [images, setImages] = useState([])
    useEffect(() => {
        fetchProduct()
    }, [])
    const fetchProduct = async () => {
        const res = await apiFetchProductById(pid)
        if (res.data) {
            setProduct(res.data)
        }
        if (res.data?.images) {
            setImages(res.data?.images.map((i: string) => {
                return { original: i, thumbnail: i }
            }))

        }
    }
    const calc = (sign: string) => {
        if (sign === 'increase') {
            setQuantity(prev => prev + 1)
        }
        else {
            if (sign === 'decrease') {
                if (quantity === 1) return
                setQuantity(prev => prev - 1)
            } else {
                if (!Number(sign)) { setQuantity(1) }
                else { setQuantity(+sign) }
            }
        }
    }
    return (<>
        <div className='w-full flex justify-center bg-grey mb-5'>
            <div className='w-main py-4 flex flex-col gap-2'>
                <h3 className='uppercase text-tab text-lg font-semibold'>{product?.title}</h3>
                <Breadcrumbs nameProduct={product?.title} key={product?._id} />
            </div>
        </div>
        <div className='w-main flex'>
            <div className='w-[40%] border rounded-md'>
                {images.length > 0 ? <ImageGallery items={images} /> : <span>No any images</span>}
            </div>
            <div className='w-[60%] flex pl-11'>
                <div className='w-[62.5%] flex flex-col'>
                    <span className="text-price mb-5 text-3xl font-semibold">{addCommas(removeNonNumeric(product?.price || 0))} VND</span>
                    <div className='flex gap-3 items-center mb-5'>
                        <div className="flex gap-1">{convertNumberToList(product?.totalRating || 0).map((p, index) => {
                            return (
                                <span key={index} className="text-yellow text-xs">
                                    {p === 1 ? <BsStarFill size={16.8} /> : p === 0 ? <BsStar size={16.8} /> : <BsStarHalf size={16.8} />}
                                </span>
                            )
                        })}</div>
                        <span className='capitalize text-sm text-red'>sold: {product?.sold || 0}</span>
                    </div>
                    <div className='text-sm text-black mb-4'>
                        <ul>
                            {product?.description && product?.description.length > 0 ? product.description.map((i: string, idx) => {
                                return (<li className='flex items-center gap-4 leading-6' key={idx}><FaSquare size={6} />{i}</li>)
                            }) : <span>No description</span>}
                        </ul>
                    </div>
                    <div className='capitalize flex gap-4 items-center'>
                        <span className='font-semibold text-tab'>quantity</span>
                        <div className='bg-quantity text-collection flex max-w-[100px] min-w-[75px] border rounded-md'>
                            <button onClick={() => { calc('decrease') }} className='border-r border-r-quantity cursor-pointer px-2 text-center'>&#8722;</button>
                            <input type='text' onChange={(e) => { calc(e.target.value) }} className='w-full bg-transparent text-center py-[5px]' value={quantity} />
                            <button onClick={() => { calc('increase') }} className='border-l border-l-quantity cursor-pointer px-2 text-center'>&#43;</button>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => { alert(quantity) }} className='py-2 mt-4 rounded-md text-white uppercase tracking-wide w-full bg-red'>add to cart</button>
                    </div>
                </div>
                <div className='w-[37.5%] text-sm text-black'>
                    <ExtraInfo />
                </div>
            </div>
        </div>
        <div className='h-[400px]'></div></>)
}
export default Product