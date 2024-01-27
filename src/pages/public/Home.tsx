import { Outlet } from "react-router-dom"

const Home = () => {
    return (<div className="text-white bg-red text-6xl">item
        <Outlet />
    </div>)
}
export default Home