
import { apiRegister } from '@/config/api';
import { MyCheckbox, MyTextInput } from '@/components/utils/custom.formik';
import { errorS, successS } from '@/config/custom.toast';
import { capitalizeFirstLetter, convertMess, phoneRegExp } from '@/config/helper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const RegisterForm = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '', firstName: '', lastName: '', mobile: '', acceptedTerms: false, }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                mobile: Yup.string().required('Required').matches(phoneRegExp, 'Phone number is not valid'),
                acceptedTerms: Yup.boolean()
                    .required('Required')
                    .oneOf([true], 'You must accept the terms and conditions.'),
            })}
            onSubmit={async (values) => {
                try {
                    const { acceptedTerms, ...dataSubmit } = values
                    const res = await apiRegister(dataSubmit)
                    if (!res.data) {
                        errorS(capitalizeFirstLetter(convertMess(res.message)));
                    } else {
                        successS('Confirm Email To Activate Your Account')
                    }
                    return
                } catch (err) { errorS(capitalizeFirstLetter('Oops! Something wrong happened')) }
            }}
        >

            <Form className='flex flex-col w-full'>
                <MyTextInput
                    label="First name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                />
                <MyTextInput
                    label="Last name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                />
                <MyTextInput
                    label="Phone number"
                    name="mobile"
                    type="text"
                    placeholder="0794384789"
                />
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
                />

                <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox>

                <button className='bg-red py-2 mt-4 rounded-md text-white uppercase tracking-wide w-full' type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
export default RegisterForm