interface IProps {
    value: number,
    unit: string
}
const CountDown = (props: IProps) => {
    const { unit, value } = props
    return (
        <div className="flex-1 flex flex-col items-center bg-time py-[10px] px-[10px] text-tab">
            <span className="font-semibold text-lg">{value}</span>
            <span className="text-xs text-time">{unit}</span>
        </div>
    )
}
export default CountDown