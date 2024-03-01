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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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
    const arr = [
        { id: 1, title: 'warranty', content: '<div><h2 class="text-[20px] font-semibold uppercase mb-2">Warranty Information</h2><p class="mb-2">LIMITED WARRANTIES<br>Limited Warranties are non-transferable. The following Limited Warranties are given to the original retail purchaser of the following Ashley Furniture Industries, Inc.Products:</p><p>Frames Used In Upholstered and Leather Products<br>Limited Lifetime Warranty<br> A Limited Lifetime Warranty applies to all frames used in sofas, couches, love seats, upholstered chairs, ottomans, sectionals, and sleepers. Ashley Furniture Industries,Inc. warrants these components to you, the original retail purchaser, to be free from material manufacturing defects.</p></div>' },
        { id: 2, title: 'delivery', content: '<div><h2 class="text-[20px] font-semibold uppercase mb-2">Purchasing &amp; Delivery</h2><p class="mb-2">Before you make your purchase, it\'s helpful to know the measurements of the area you plan to place the furniture. You should also measure any doorways and hallways through which the furniture will pass to get to its final destination.</p><p class="mb-2">Shopify Shop requires that all products are properly inspected BEFORE you take it home to insure there are no surprises. Our team is happy to open all packages and will assist in the inspection process. We will then reseal packages for safe transport. We encourage all customers to bring furniture pads or blankets to protect the items during transport as well as rope or tie downs. Shopify Shop will not be responsible for damage that occurs after leaving the store or during transit. It is the purchaser’s responsibility to make sure the correct items are picked up and in good condition.</p><p class="mb-2">Customers are able to pick the next available delivery day that best fits their schedule. However, to route stops as efficiently as possible, Shopify Shop will provide the time frame. Customers will not be able to choose a time. You will be notified in advance of your scheduled time frame. Please make sure that a responsible adult (18 years or older) will be home at that time.<br/>In preparation for your delivery, please remove existing furniture, pictures, mirrors, accessories, etc. to prevent damages. Also insure that the area where you would like your furniture placed is clear of any old furniture and any other items that may obstruct the passageway of the delivery team. Shopify Shop will deliver, assemble, and set-up your new furniture purchase and remove all packing materials from your home. Our delivery crews are not permitted to move your existing furniture or other household items. Delivery personnel will attempt to deliver the purchased items in a safe and controlled manner but will not attempt to place furniture if they feel it will result in damage to the product or your home. Delivery personnel are unable to remove doors, hoist furniture or carry furniture up more than 3 flights of stairs. An elevator must be available for deliveries to the 4th floor and above.</p></div>' },
        { id: 3, title: 'review', content: 'review 5' },
    ]
    const [active, setActive] = useState<number>(1)
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
        <div className='w-main mt-6'>
            <Tabs>
                <TabList className='flex gap-2'>
                    {arr.map((i) => {
                        return (
                            <Tab key={i.id} onClick={() => { setActive(i.id) }} className={`${active === i.id ? 'bg-white border-b-0' : 'bg-ex-info'} uppercase outline-none text-tab text-lg font-medium rounded-t-md tracking-wide px-5 py-[9.75px] border-extra border cursor-pointer hover:bg-white`}>{i.title}</Tab>
                        )
                    })}
                </TabList>
                {arr.map((i) => {
                    return (
                        <TabPanel >
                            <div className='p-5 -mt-[1px] border rounded-b-md rounded-r-md border-extra w-full text-black' key={i.id} dangerouslySetInnerHTML={{ __html: i?.content || '' }}></div>
                        </TabPanel>
                    )
                })}

            </Tabs>
        </div>
        <div className='h-[400px]'></div></>)
}
export default Product