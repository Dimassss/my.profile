import TimechartContext, { TimechartContextConfigType } from "./timechart-context"
import { TimechartElementType } from "./timechart.types"

interface Props {
    el: TimechartElementType,
    h: number,      //height
    y: number,
}

export default function TimechartElement({el, h, y}: Props){
    return (<TimechartContext.Consumer>{
        ({dataDelta, dataStart, dataEnd}: TimechartContextConfigType) => {
            const drawStart = dataStart !== undefined ? dataStart : el.start
            const drawEnd = dataEnd !== undefined ? dataEnd : el.end
            
            return (<g>
                <rect
                    width={(el.end - el.start) / (drawEnd - drawStart)} 
                    height={h * 0.8} 
                    y={y + h * 0.1} 
                    x={(el.start - drawStart) / (drawEnd - drawStart)} 
                    fill="rgba(255,0,0,0.7)"
                />
            </g>)
        }
    }</TimechartContext.Consumer>)

    
}