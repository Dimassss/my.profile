import { useContext } from "react"
import TimechartContext from "./timechart-context"
import TimechartViewboxContext from "./timechart-viewbox-context"
import { TimechartElementType } from "./timechart.types"

interface Props {
    el: TimechartElementType,
    h: number,      //height
    y: number,
}

export default function TimechartElement({el, h, y}: Props){
    const {width, height, displayNames} = useContext(TimechartContext)
    const {start, end} = useContext(TimechartViewboxContext)
    
    const elY = height * (y + h * 0.1)
    const elX = width * (el.start - start) / (end - start)
    const elH = height * h * 0.8
    const elW = width * (el.end - el.start) / (end - start)
    const tY = 0.9 * elH
    const tX = 2

    return (<g transform={`translate(${elX}, ${elY})`}>
        <rect
            width={elW} 
            height={elH} 
            y={0} 
            x={0} 
        />
        {el.name && displayNames 
            ? (<g transform={`translate(${tX}, ${tY})`} className={"el-text"}>
                <text x={0} y={0} width={elH} className={"glow-duplication"}>
                    {el.name.split(' ').map(t => (<tspan x={0} dy={"1em"} key={t}>{t}</tspan>))}
                </text>
                <text x={0} y={0} width={elH}>
                    {el.name.split(' ').map(t => (<tspan x={0} dy={"1em"} key={t}>{t}</tspan>))}
                </text>
            </g>)
            : undefined
        }
    </g>)

    
}