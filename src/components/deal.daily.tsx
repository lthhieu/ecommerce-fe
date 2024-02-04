import { BsStarFill } from "react-icons/bs";

const DealDaily = () => {
    return (<div className="border mb-[50px]">
        <div className="flex items-center justify-between">
            <BsStarFill className="text-red flex-1" />
            <span className="flex-8 text-black text-xl uppercase font-semibold flex items-center justify-center tracking-widest">Daily Deals</span>
            <span className="flex-1"></span>
        </div>
    </div>)
}
export default DealDaily