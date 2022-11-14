import { PropsWithChildren, useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import { useTimechartData } from "./timechart"
import { TimechartElementType, TimechartGroupType } from "./timechart.types"
import TimechartContainer from "./TimechartContainer"
import TimechartViewbox from "./TimechartViewbox"

type onDrawProps = any

interface Props extends PropsWithChildren{
    data: TimechartElementType[],
    groups: TimechartGroupType[],
    width?: number,
    height?: number,
    start?: number,
    end?: number,
    displayNames?: boolean,
    name: string | number,
    onDraw?: (cfg: onDrawProps) => void
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
    name,
    onDraw = () => {}
}: Props){
    const [{minVal, maxVal, dataGroups, groupsHeights}, setTimechartData] = useTimechartData(data, groups)    

    useEffect(() => {
        onDraw({rows: groupsHeights.reduce((a,b) => a+b, 0)})
    }, [groupsHeights])

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
        groups={groups}
    >
        <TimechartViewbox
            start={s}
            end={e}
            dataGroups={dataGroups}
            groupsHeights={groupsHeights}
        >{children}</TimechartViewbox>
    </TimechartContainer>)
}