import { path } from '@/config/constant';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
interface IProp {
    nameProduct?: string;
}
const Breadcrumbs = (prop: IProp) => {
    const { nameProduct } = prop
    const routes = [
        { path: path.DETAIL_PRODUCT, breadcrumb: nameProduct || 'Name\'s product' }
    ];
    const breadcrumbs = useBreadcrumbs(routes);
    return (
        <span className='text-sm text-black flex'>{breadcrumbs.map(({ match, breadcrumb }, index) => {
            return (
                <Link className='flex items-center' key={match.pathname} to={match.pathname}>
                    {index !== 0 && <IoMdArrowDropright />}{breadcrumb}
                </Link>
            )
        })}</span>)
}
export default Breadcrumbs