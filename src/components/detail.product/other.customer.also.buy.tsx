
import Slider from 'react-slick';
import ProductElement from '../utils/product.element/product.element';
import { useAppSelector } from '@/app/hooks';
import { selectData } from '@/app/slice/categoriesSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProducts } from '@/config/data.type';
import { apiFetchProducts } from '@/config/api';
const OtherCustomerAlsoBuy = () => {
    const categories = useAppSelector(selectData)
    const [productByPrice, setProductByPrice] = useState<IProducts[] | null>(null)
    let { category } = useParams();
    useEffect(() => {
        if (categories.length > 0)
            fetchProductsByPrice()
    }, [categories])
    const fetchProductsByPrice = async () => {
        const result = categories.find(i => i.slug === category)
        const res = await apiFetchProducts(`current=1&pageSize=5&&sort=-price&category=${result?._id}`)
        if (res.data) {
            setProductByPrice(res.data?.result)
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='w-main'>
            <div className="py-4 border-b-2 border-red w-full mt-2">
                <span className="capitalize text-xl text-tab font-semibold">
                    Other customers also buy</span>
            </div>
            <div className="my-6 pr-1 -ml-5">
                <Slider {...settings} >
                    {productByPrice && productByPrice.length > 0 && productByPrice.map(item => {
                        return (
                            <ProductElement key={item._id} product={item} newArrival={true} />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
export default OtherCustomerAlsoBuy