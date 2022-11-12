import Timechart from "./Timechart"
import { TimechartElementType } from "./timechart.types"
import TimechartSlider from "./TimechartSlider"

interface Props {
    data: TimechartElementType[],
    groups: string[],
    width?: number,
    height?: number,
    name: string | number,          //must be unique
    onChange?: (start: number, end: number) => void
}


export default function TimechartSelector({data, groups, name, width = 800, height = 80, onChange = () => {}}: Props){

    return (<Timechart
        data={data}
        groups={groups}
        width={width}
        height={height}
        displayNames={false}
        name={'selector-'+name}
    >
        <TimechartSlider width={width} height={height} onChange={(s,e) => {
            onChange(s,e)
        }}/>
    </Timechart>)
}