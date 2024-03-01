import { useParams } from "react-router-dom"
import Breadcrumbs from "../utils/breadcrumbs"

const Category = () => {
    const { category } = useParams()
    return (<>
        <div className='w-full flex justify-center bg-grey mb-5'>
            <div className='w-main py-4 flex flex-col gap-2'>
                <h3 className='uppercase text-tab text-lg font-semibold'>{category?.toLocaleUpperCase()}</h3>
                <Breadcrumbs />
            </div>
        </div>
        <div className="w-main">hieu</div>
    </>)
}
export default Category