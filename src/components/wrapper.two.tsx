import BestSeller from "./best.seller"
import DealDaily from "./deal.daily"

const WrapperTwo = () => {

    return (<div className="w-main flex py-2 gap-2"
    ><div className="w-[30%] border p-5"><DealDaily /></div>
        <div className="w-[70%]">
            <BestSeller />
        </div></div>)
}
export default WrapperTwo