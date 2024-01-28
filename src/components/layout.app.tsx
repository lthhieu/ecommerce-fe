import Header from "./header"
import Navigation from "./navigation"
import TopHeader from "./top.header"

interface IProps {
    children: React.ReactNode
}

const LayoutApp = (props: IProps) => {
    return (<div className="flex flex-col items-center">
        <TopHeader />
        <Header />
        <Navigation />
        {props.children}
    </div>)
}
export default LayoutApp