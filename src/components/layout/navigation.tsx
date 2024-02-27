import { NavLink } from "react-router-dom"
import { navigation } from "../../config/constant"

const Navigation = () => {
    return (<div className="w-main border-b h-[48px] py-3 flex justify-between items-center"
    ><div>
            {navigation.map(item => { return (<NavLink className={'mr-[30px] text-sm text-nav hover:text-red'} key={item.id} to={item.path}>{item.value}</NavLink>) })}</div>
        <input className="text-sm outline-none pr-20" placeholder="Search something" /></div>)
}
export default Navigation