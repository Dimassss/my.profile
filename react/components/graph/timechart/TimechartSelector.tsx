import { useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import Timechart from "./Timechart"
import { useTimechartData } from "./timechart"
import { TimechartElementType } from "./timechart.types"
import TimechartContainer from "./TimechartContainer"
import TimechartGroup from "./TimechartGroup"
import TimechartSlider from "./TimechartSlider"
import TimechartViewbox from "./TimechartViewbox"

interface Props {
    data: TimechartElementType[],
    groups: string[],
    width?: number,
    height?: number
}


export default function TimechartSelector({data, groups, width = 800, height = 80}: Props){

    return (<Timechart
        data={data}
        groups={groups}
        width={width}
        height={height}
        displayNames={false}
    >
        <TimechartSlider width={width} height={height}/>
    </Timechart>)
}