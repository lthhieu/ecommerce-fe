import { useParams } from "react-router-dom"

const Category = () => {
    const { category } = useParams()
    return (<div>{category} page</div>)
}
export default Category