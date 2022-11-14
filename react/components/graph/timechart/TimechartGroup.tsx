import { PropsWithChildren, useContext } from "react";
import TimechartContext from "./timechart-context";
import { TimechartElementType } from "./timechart.types";
import TimechartElement from "./TimechartElement";

interface Props extends PropsWithChildren {
    data: TimechartElementType[],      //height
    rowOffsetY?: number
    name: string | null
}

export default function TimechartGroup({data, rowOffsetY = 0, name}: Props){
    const {rows} = useContext(TimechartContext)

    return (<g className={name ? `group-${name}` : undefined}>{
        data.map(el => {
            return (<TimechartElement
                key={`${el.name}: ${el.start}-${el.end}`}
                el={el}
                h={rows == 0 ? 0 : 1/rows}
                y={rows == 0 ? 0 : (rowOffsetY/rows + (el.row === undefined ? 0 : el.row/rows))}    
            />)
        })
    }</g>)

}