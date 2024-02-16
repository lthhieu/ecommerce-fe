import FeatureProduct from "@/components/feature.products"
import WrapperOne from "../../components/wrapper.one"
import WrapperTwo from "../../components/wrapper.two"
import NewArrivals from "@/components/new.arrivals"

const Home = () => {
    return (<div>
        <div><WrapperOne /></div>
        <div><WrapperTwo /></div>
        <div><FeatureProduct /></div>
        <div><NewArrivals /></div>
    </div>)
}
export default Home