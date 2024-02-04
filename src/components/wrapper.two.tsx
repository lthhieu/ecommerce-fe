import BestSeller from "./best.seller"

const WrapperTwo = () => {

    return (<div className="w-main flex py-2 gap-2"
    ><div className="w-[30%] border">Deal daily</div>
        <div className="w-[70%]">
            <BestSeller />
        </div></div>)
}
export default WrapperTwo