import { PropsWithChildren, useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/TimechartViebox.module.scss"
import TimechartContext, { TimechartContextConfigType } from "./timechart-context"
import { TimechartElementType } from "./timechart.types"
import TimechartElement from "./TimechartElement"

interface Props extends PropsWithChildren{
    start: number   //timestamp
    end: number     //timestamp
    width: number   //px
    height: number  //px
}

export default function TimechartViewbox({height, width, start, end, children}: Props){

    return (<TimechartContext.Consumer>{
        ({dataDelta, dataStart, dataEnd}: TimechartContextConfigType) => {
            const drawStart = isNaN(+start) ? +start : +dataStart
            const drawEnd = isNaN(+end) ? +end : +dataEnd

            return (<svg 
                viewBox={`${(drawStart-dataStart) / dataDelta} 0 ${(drawEnd - dataStart) / dataDelta} 1`}         //real full viewbox is 0 0 1 1
                width={width} 
                height={height} 
                style={{background: "#ccc"}}
                preserveAspectRatio="none"
            >
                {children}
            </svg>)  
        }
    }</TimechartContext.Consumer>)
}