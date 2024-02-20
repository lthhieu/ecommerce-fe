import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successT = (mess: string) => toast.success(mess, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});