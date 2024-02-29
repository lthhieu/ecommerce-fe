import { FaPhoneAlt } from "react-icons/fa"
import { FaTruck } from "react-icons/fa6"
import { IoGift, IoShieldHalf } from "react-icons/io5"
import { TiArrowBack } from "react-icons/ti"

const ExtraInfo = () => {
    const extraInfo = [
        { id: 1, value: 'guarantee', sub: 'quality checked', icon: <IoShieldHalf size={24} /> },
        { id: 2, value: 'free shipping', sub: 'free on all products', icon: <FaTruck size={24} /> },
        { id: 3, value: 'special gift cards', sub: 'special gift cards', icon: <IoGift size={24} /> },
        { id: 4, value: 'free return', sub: 'within 7 days', icon: <TiArrowBack size={24} /> },
        { id: 5, value: 'consultancy', sub: 'lifetime 24/7/356', icon: <FaPhoneAlt size={24} /> }
    ]
    return (
        <ul>{extraInfo.length > 0 && extraInfo.map((i) => {
            return (<li key={i.id} className='p-[10px] border border-extra rounded-md mb-[10px] flex gap-4 items-center'>
                <span className='rounded-full border flex items-center justify-center w-10 h-10 p-1'>{i.icon}</span>
                <span className='capitalize flex flex-col'>
                    <span>{i.value}</span>
                    <span className='text-xs text-sub'>{i.sub}</span>
                </span>
            </li>)
        })}</ul>
    )
}
export default ExtraInfo