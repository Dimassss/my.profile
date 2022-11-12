import { PropsWithChildren, useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/TimechartViebox.module.scss"
import TimechartContext, { TimechartContextConfigType } from "./timechart-context"
import { TimechartElementType } from "./timechart.types"
import TimechartElement from "./TimechartElement"

interface Props extends PropsWithChildren{
    start: number   //timestamp
    end: number     //timestamp
}

export default function TimechartViewbox({start, end, children}: Props){

    return (<TimechartContext.Consumer>{
        ({dataDelta, dataStart, dataEnd, width, height, rows}: TimechartContextConfigType) => {
            const drawStart = isNaN(+start) ? +start : +dataStart
            const drawEnd = isNaN(+end) ? +end : +dataEnd

            return (<svg 
                viewBox={`${width * (drawStart-dataStart) / dataDelta} 0 ${width * (drawEnd - dataStart) / dataDelta} ${height}`}         //real full viewbox is 0 0 1 1
                width={width} 
                height={height} 
                style={{background: "#ccc"}}
                preserveAspectRatio="none"
            >
                <style>{`
                    text {
                        font-size: ${0.6 * height/rows}px;
                        line-height: ${0.8 * height/rows}px;
                    }
                `}</style>
                {children}
            </svg>)  
        }
    }</TimechartContext.Consumer>)
}