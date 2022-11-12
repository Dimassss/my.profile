import TimechartContext from "./timechart-context"
import { TimechartContextConfigType, TimechartElementType } from "./timechart.types"

interface Props {
    el: TimechartElementType,
    h: number,      //height
    y: number,
}

export default function TimechartElement({el, h, y}: Props){
    return (<TimechartContext.Consumer>{
        ({dataDelta, dataStart, dataEnd, width, height}: TimechartContextConfigType) => {
            const drawStart = dataStart !== undefined ? dataStart : el.start
            const drawEnd = dataEnd !== undefined ? dataEnd : el.end
            
            const elY = height * (y + h * 0.1)
            const elX = width * (el.start - drawStart) / (drawEnd - drawStart)
            const elH = height * h * 0.8
            const tY = elY + height * h * 0.6
            const tX = elX + 2

            return (<g>
                <rect
                    width={width * (el.end - el.start) / (drawEnd - drawStart)} 
                    height={elH} 
                    y={elY} 
                    x={elX} 
                    fill="rgba(255,0,0,0.7)"
                />
                {el.name ? <text x={tX} y={tY}>{el.name}</text> : undefined}
            </g>)
        }
    }</TimechartContext.Consumer>)

    
}