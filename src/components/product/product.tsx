import { apiFetchProductById } from '@/config/api';
import { IProducts } from '@/config/data.type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from 'components/utils/breadcrumbs';
import ImageGallery from "react-image-gallery";
interface IArr {
    original: string;
    thumbnail: string
}

const Product = () => {
    let { id } = useParams();
    const pid = id?.split('_')[1].split('.')[0] || '';
    const [product, setProduct] = useState<IProducts | null>(null)
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
            <div className='w-[60%]'>right</div>
        </div>
        <div className='h-[400px]'></div></>)
}
export default Product