import FeatureProduct from "@/components/feature.products"
import WrapperOne from "../../components/wrapper.one"
import WrapperTwo from "../../components/wrapper.two"
import NewArrivals from "@/components/new.arrivals"
import HotCollections from "@/components/hot.collections"
import { useAppSelector } from "@/app/hooks"
import { selectIsAuthenticated, selectUser } from "@/app/slice/profileSlice"

const Home = () => {
    const user = useAppSelector(selectUser)
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    console.log(user, isAuthenticated)
    return (<div>
        <div><WrapperOne /></div>
        <div><WrapperTwo /></div>
        <div><FeatureProduct /></div>
        <div><NewArrivals /></div>
        <div><HotCollections /></div>
    </div>)
}
export default Home