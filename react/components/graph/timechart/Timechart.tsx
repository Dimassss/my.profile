import { useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import { useTimechartData } from "./timechart"
import { TimechartElementType } from "./timechart.types"
import TimechartContainer from "./TimechartContainer"
import TimechartGroup from "./TimechartGroup"
import TimechartViewbox from "./TimechartViewbox"

interface Props {
    data: TimechartElementType[],
    groups: string[],
    width?: number,
    height?: number
}


export default function Timechart({data, groups, width = 800, height = 80}: Props){
    const [{start, end, dataGroups, groupsHeights}, setTimechartData] = useTimechartData(data, groups)

    useEffect(() => {
        setTimechartData(data, groups)
    }, [data, groups])


    return (<TimechartContainer 
        data={data} 
        rows={groupsHeights.reduce((a,b) => a+b, 0)}
        width={width}
        height={height}
    >
        <TimechartViewbox
            start={start}
            end={end}
            dataGroups={dataGroups}
            groupsHeights={groupsHeights}
        ></TimechartViewbox>
    </TimechartContainer>)
}