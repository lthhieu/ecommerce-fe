import BestSeller from "./best.seller"

const WrapperTwo = () => {

    return (<div className="w-main px-5 flex py-2 gap-6 h-[500px]"
    ><div className="w-[30%]">Deal daily</div>
        <div className="w-[70%]"><BestSeller /></div></div>)
}
export default WrapperTwo