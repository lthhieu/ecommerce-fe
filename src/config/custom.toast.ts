import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

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

export const errorS = (mess: string) => Swal.fire({
    title: 'Error!',
    text: mess,
    icon: 'error',
    confirmButtonText: 'OK'
})