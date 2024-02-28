import { apiFetchProductById } from '@/config/api';
import { IProducts } from '@/config/data.type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from 'components/utils/breadcrumbs';
import ImageGallery from "react-image-gallery";

const Product = () => {
    let { id } = useParams();
    const pid = id?.split('_')[1].split('.')[0] || '';
    const [product, setProduct] = useState<IProducts | null>(null)
    useEffect(() => {
        fetchProduct()
    }, [])
    const fetchProduct = async () => {
        const res = await apiFetchProductById(pid)
        if (res.data) {
            setProduct(res.data)
        }
    }
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    return (<>
        <div className='w-full flex justify-center bg-grey mb-5'>
            <div className='w-main py-4 flex flex-col gap-2'>
                <h3 className='uppercase text-tab text-lg font-semibold'>{product?.title}</h3>
                <Breadcrumbs nameProduct={product?.title} key={product?._id} />
            </div>
        </div>
        <div className='w-main flex'>
            <div className='w-[40%]'>
                <ImageGallery items={images} />

            </div>
            <div className='w-[60%]'>right</div></div></>)
}
export default Product