import { PropsWithChildren, useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import { useTimechartData } from "./timechart"
import { TimechartElementType } from "./timechart.types"
import TimechartContainer from "./TimechartContainer"
import TimechartViewbox from "./TimechartViewbox"

interface Props extends PropsWithChildren{
    data: TimechartElementType[],
    groups: string[],
    width?: number,
    height?: number,
    start?: number,
    end?: number,
    displayNames?: boolean,
    name: string | number
}


export default function Timechart({
    data, 
    groups, 
    width = 800, 
    height = 80, 
    children,
    start,
    end,
    displayNames = true,
    name
}: Props){
    const [{minVal, maxVal, dataGroups, groupsHeights}, setTimechartData] = useTimechartData(data, groups)    

    const s = start == undefined ? minVal : Math.min(Math.max(minVal, start), maxVal)
    const e = end == undefined ? maxVal : Math.max(Math.min(maxVal, end), minVal+1)

    useEffect(() => {
        setTimechartData(data, groups)
    }, [data, groups])

    return (<TimechartContainer 
        data={data} 
        rows={groupsHeights.reduce((a,b) => a+b, 0)}
        width={width}
        height={height}
        displayNames={displayNames}
        name={name}
    >
        <TimechartViewbox
            start={s}
            end={e}
            dataGroups={dataGroups}
            groupsHeights={groupsHeights}
        >{children}</TimechartViewbox>
    </TimechartContainer>)
}