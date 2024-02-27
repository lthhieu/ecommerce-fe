import FeatureProduct from "@/components/home/feature.products/feature.products"
import WrapperOne from "../../components/home/wrapper.one"
import WrapperTwo from "../../components/home/wrapper.two/wrapper.two"
import NewArrivals from "@/components/home/new.arrivals"
import HotCollections from "@/components/home/hot.collections"

const Home = () => {
    return (<div>
        <div><WrapperOne /></div>
        <div><WrapperTwo /></div>
        <div><FeatureProduct /></div>
        <div><NewArrivals /></div>
        <div><HotCollections /></div>
    </div>)
}
export default Home