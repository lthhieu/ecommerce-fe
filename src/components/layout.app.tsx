import Header from "./Header"
import Navigation from "./Navigation"
import TopHeader from "./Top.Header"

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