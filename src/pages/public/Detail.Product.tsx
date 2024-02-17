import { useParams } from 'react-router-dom';
const DetailProduct = () => {
    let { id } = useParams();
    const pid = id?.split('_')[1].split('.')[0];
    return (<div>DetailProduct page {pid}</div>)
}
export default DetailProduct