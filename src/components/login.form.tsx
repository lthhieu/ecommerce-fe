
import { useAppDispatch } from '@/app/hooks';
import { fetchProfileAsync } from '@/app/slice/profileSlice';
import { apiLogin } from '@/config/api';
import { MyTextInput } from '@/components/custom.formik';
import { errorS } from '@/config/custom.toast';
import { capitalizeFirstLetter, convertMess } from '@/config/helper';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const LoginForm = () => {
    const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onsubmit
    }
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
            })}
            onSubmit={async (values) => {
                const data = { username: values.email, password: values.password }
                try {
                    const res = await apiLogin(data)
                    if (!res.data) {
                        errorS(capitalizeFirstLetter(convertMess(res.message)));
                    } else {
                        localStorage.setItem('access_token', res.data?.access_token);
                        dispatch(fetchProfileAsync(null))
                        navigate('/');
                    }
                } catch (err) { errorS(capitalizeFirstLetter('Oops! Something wrong happened')) }
            }}
        >

            <Form className='flex flex-col w-full'>
                <MyTextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="admin@gmail.com"
                />

                <MyTextInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="123456"
                    onKeyDown={handlePressEnter}
                />

                <button className='bg-red py-2 mt-4 rounded-md text-white uppercase tracking-wide w-full' type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
export default LoginForm