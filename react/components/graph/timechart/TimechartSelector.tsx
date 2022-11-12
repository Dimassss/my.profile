import { useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import Timechart from "./Timechart"
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


export default function TimechartSelector({data, groups, width = 800, height = 80}: Props){
    const sliderWidth = 10;
    const [start, setStart] = useState(0)       //px
    const [end, setEnd] = useState(width)       //px
    const [movingStart, setMovingStart] = useState(start)
    const [movingEnd, setMovingEnd] = useState(end)
    const [startPosition, setStartPosition] = useState(null as any)

    const boundVal = (a:number, b:number, val:number) => Math.min(b, Math.max(a, val))
    const onStartMoving = (e:any, side: -1 | 1) => {
        const x = e.nativeEvent.clientX;
        const y = e.nativeEvent.clientY;
        setStartPosition([x,y, side])
    }
    const onEndMoving = (e: any) => {
        if(startPosition == null) return;

        if(-1 == startPosition[2]) {
            setStart(movingStart)
        } else {
            setEnd(movingEnd)
        }

        setStartPosition(null)
    }
    const onMoving = (e: any) => {
        if(startPosition == null) return;

        const x = e.nativeEvent.clientX;
        const y = e.nativeEvent.clientY;

        if(-1 == startPosition[2]) {
            const newStart = start + (x - startPosition[0])
            setMovingStart(boundVal(0, end - 3*sliderWidth, newStart))
        } else {
            const newEnd = end + (x - startPosition[0])
            setMovingEnd(boundVal(start + 3*sliderWidth, width, newEnd))
        }
    }

    useEffect(() => {
        setEnd(width)
    }, [width])
    

    return (<Timechart
        data={data}
        groups={groups}
        width={width}
        height={height}
        displayNames={false}
    >
        <g onMouseLeave={onEndMoving} onMouseUp={onEndMoving} onMouseMove={onMoving}>
            <rect 
                x={0} 
                y={0} 
                width={width} 
                height={height} 
                fill="rgba(0, 0, 0, 0)"
            />
            <rect 
                x={0} 
                y={0} 
                width={movingStart} 
                height={height} 
                fill="rgba(0, 0, 0, 0.5)"
            />

            <rect 
                x={movingEnd} 
                y={0} 
                width={width - movingEnd} 
                height={height} 
                fill="rgba(0, 0, 0, 0.5)"
            />
            <rect 
                x={0} 
                y={0} 
                width={movingStart + sliderWidth} 
                height={height} 
                fill="rgba(255, 255, 255, 0.7)"
                onMouseDown={e => onStartMoving(e, -1)}
            />

            <rect 
                x={movingEnd - sliderWidth} 
                y={0} 
                width={width + sliderWidth - movingEnd} 
                height={height} 
                fill="rgba(255, 255, 255, 0.7)"
                onMouseDown={e => onStartMoving(e, 1)}
            />
        </g>
    </Timechart>)
}