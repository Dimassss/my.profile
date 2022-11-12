import { useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import TimechartContext, { TimechartContextConfigUpdateType } from "./timechart-context"
import { TimechartElementType } from "./timechart.types"
import TimechartContainer from "./TimechartContainer"
import TimechartElement from "./TimechartElement"
import TimechartGroup from "./TimechartGroup"
import TimechartViewbox from "./TimechartViewbox"

interface Props {
    data: TimechartElementType[],
    groups: string[]
}

const setRowsInElements = (data: TimechartElementType[]) => {
    if(data.length == 0) return data

    const dataIntervals = data.map((el, i) => [el.start, el.end, i])     //last number is default row id
        .sort((a,b) => a[0] - b[0])
    const dataPoints = dataIntervals.reduce((a,b) => [...a, ...b], [])
        .filter((val,i,self) => self.indexOf(val) == i)
        .sort((a,b) => a-b)
    const plotIntervals = dataIntervals.map(([s,e]) => [dataPoints.indexOf(s), dataPoints.indexOf(e)])
    const plot: boolean[][] = []

    const createEmptyRow = () => (new Array(dataPoints.length - 1)).fill(false)
    const canDrawElement = ([s,e]: number[], rowID: number) => {
        const delta = e-s

        for(let i = 0; i < delta; i++){
            if(plot[rowID][s+i]) return false
        }

        return true
    }
    const drawElement = (i:number, [s,e]: number[], rowID: number) => {
        //$i there is index of element in dataIntervals
        const delta = e-s

        data[dataIntervals[i][2]].row = rowID

        for(let i = 0; i < delta; i++){
            plot[rowID][s+i] = true
        }
    }

    plot.push(createEmptyRow())

    plotIntervals.forEach(([s,e], i) => {
        let wasDrown = false

        for(let rowID = 0; rowID < plot.length; rowID++){
            if(canDrawElement([s,e], rowID)) {
                wasDrown = true
                drawElement(i, [s,e], rowID)
                break;
            }
        }

        if(!wasDrown) {
            plot.push(createEmptyRow())
            drawElement(i, [s,e], plot.length-1)
        }
    })

    
    return data
}

export default function Timechart({data, groups}: Props){
    let a = +Math.min(...data.map(d => d.start))
    let b = +Math.max(...data.map(el => el.end))

    a = !isNaN(a) && isFinite(a) ? a : 0
    b = !isNaN(b) && isFinite(b) ? b : 1

    const [start, setStart] = useState(a)
    const [end, setEnd] = useState(b)

    const [dataGroups, setDataGroups] = useState(
        groups.map(gr => {
            return setRowsInElements(data.filter(el => el.group == gr))
        })
    )
    const [groupsHeights, setGroupHeights] = useState(
        dataGroups.map(
            dataGroup => dataGroup.length > 0 ? Math.max(...dataGroup.map(el => el.row as number)) + 1 : 0
        )
    )

    useEffect(() => {
        setDataGroups(
            groups.map(gr => {
                return setRowsInElements(data.filter(el => el.group == gr))
            })
        )
        setGroupHeights(
            dataGroups.map(
                dataGroup => dataGroup.length > 0 ? Math.max(...dataGroup.map(el => el.row as number)) + 1 : 0
            )
        )
    }, [data, groups])


    return (<TimechartContainer 
        data={data} 
        rows={groupsHeights.reduce((a,b) => a+b, 0)}
        width={800}
        height={80}
    >
        <TimechartViewbox
            start={start}
            end={end}
        >{
            dataGroups.map((dataGroup,i) => {
                return (<TimechartGroup 
                    key={i}
                    data={dataGroup} 
                    rowOffsetY={groupsHeights.filter((el,j) => j < i).reduce((a,b) => a+b, 0)}
                />)
            })
        }</TimechartViewbox> 
    </TimechartContainer>)
}