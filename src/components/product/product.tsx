import { apiFetchProductById } from '@/config/api';
import { IProducts } from '@/config/data.type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from 'components/utils/breadcrumbs';
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
    return (<div className='w-full flex justify-center bg-grey mb-5'>
        <div className='w-main py-4 flex flex-col gap-2'>
            <h3 className='uppercase text-tab text-lg font-semibold'>{product?.title}</h3>
            <Breadcrumbs nameProduct={product?.title} key={product?._id} />
        </div>
    </div>)
}
export default Product