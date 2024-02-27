const SelectOption = (props: any) => {
    const { icon } = props
    return (<span className="rounded-full h-10 border w-10 flex justify-center items-center text-lg text-icon bg-white shadow-xl hover:bg-icon hover:text-white cursor-pointer hover:border-icon">{icon}</span>)
}
export default SelectOption