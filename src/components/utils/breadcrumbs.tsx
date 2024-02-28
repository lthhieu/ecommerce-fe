import { path } from '@/config/constant';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
interface IProp {
    nameProduct?: string;
}
const Breadcrumbs = (prop: IProp) => {
    const { nameProduct } = prop
    const DynamicProductBreadcrumb = () => (
        <span className='text-black'>{nameProduct}</span>
    );
    const routes = [
        { path: path.DETAIL_PRODUCT, breadcrumb: DynamicProductBreadcrumb || 'Name\'s product' }
    ];
    const breadcrumbs = useBreadcrumbs(routes);
    return (
        <span className='text-sm text-[#1c1d1d] flex'>{breadcrumbs.map(({ match, breadcrumb }, index) => {
            return (
                <Link className='flex items-center hover:text-red' key={match.pathname} to={match.pathname}>
                    {breadcrumb}{index !== breadcrumbs.length - 1 && <IoMdArrowDropright />}
                </Link>
            )
        })}</span>)
}
export default Breadcrumbs