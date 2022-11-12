import { useEffect, useState } from "react"
import TimechartContext from "./timechart-context";

interface Props {
    width?: number,
    height?: number
}

const getDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    
    const monthTbl = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return `${day+1} ${monthTbl[month]} ${year}`
}

export default function TimechartSlider({width = 800, height = 80}: Props){
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
    

    return (<TimechartContext.Consumer>{({dataStart, dataEnd, dataDelta}) => (<g onMouseLeave={onEndMoving} onMouseUp={onEndMoving} onMouseMove={onMoving}>
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

        <g transform={`translate(${movingStart + sliderWidth * 0.3}, ${height / 2})`}>
            <text 
                textAnchor="middle" 
                transform={`rotate(90)`}
                pointerEvents={"none"}
            >{
                getDate(dataStart + dataDelta * (movingStart / width))
            }</text>
        </g>
        <g transform={`translate(${movingEnd - sliderWidth * 0.9}, ${height / 2})`}>
            <text
                textAnchor="middle" 
                transform={`rotate(90)`}
                pointerEvents={"none"}
            >{
                getDate(dataStart + dataDelta * (movingEnd / width))
            }</text>
        </g>
    </g>)}</TimechartContext.Consumer>)
}