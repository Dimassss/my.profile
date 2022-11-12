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
    displayNames?: boolean
}


export default function Timechart({
    data, 
    groups, 
    width = 800, 
    height = 80, 
    children,
    start,
    end,
    displayNames = true
}: Props){
    const [{minVal, maxVal, dataGroups, groupsHeights}, setTimechartData] = useTimechartData(data, groups)
    

    useEffect(() => {
        setTimechartData(data, groups)
    }, [data, groups])


    return (<TimechartContainer 
        data={data} 
        rows={groupsHeights.reduce((a,b) => a+b, 0)}
        width={width}
        height={height}
        displayNames={displayNames}
    >
        <TimechartViewbox
            start={start == undefined ? minVal : start}
            end={end == undefined ? maxVal : end}
            dataGroups={dataGroups}
            groupsHeights={groupsHeights}
        >{children}</TimechartViewbox>
    </TimechartContainer>)
}