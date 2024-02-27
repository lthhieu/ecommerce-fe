import { useParams } from 'react-router-dom';
const DetailProduct = () => {
    let { id } = useParams();
    const pid = id?.split('_')[1].split('.')[0];
    return (<div className='w-full flex justify-center bg-grey mb-5'>
        <div className='w-main py-4'>
            DetailProduct page {pid}
        </div>
    </div>)
}
export default DetailProduct