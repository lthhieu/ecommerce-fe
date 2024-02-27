import { useField } from "formik";
interface ITextInput {
    label: string,
    id?: string,
    name: string,
    type: string,
    placeholder?: string,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
interface ICheckBox {
    name: string,
    children: string
}
export const MyTextInput = ({ label, ...props }: ITextInput) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className='flex gap-2 items-center'>
                <label htmlFor={props.id || props.name}>{label}</label>
                {meta.touched && meta.error ? (
                    <div className="text-red text-xs">{meta.error}</div>
                ) : null}
            </div>
            <input className="p-2 my-2 outline-none border rounded-md" {...field} {...props} />
        </>
    );
};
export const MyCheckbox = ({ children, ...props }: ICheckBox) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div >
            <label className="flex items-center gap-2">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="text-red text-xs">{meta.error}</div>
            ) : null}
        </div>
    );
};