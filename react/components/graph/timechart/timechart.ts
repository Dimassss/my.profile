import { useState } from "react"
import { TimechartElementType, useTimechartDataReturnType } from "./timechart.types"

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

export const useTimechartData = (data: TimechartElementType[], groups: string[]): useTimechartDataReturnType => {
    const prepareData = (data: TimechartElementType[], groups: string[]) => {
        let start = data.length > 0 ? +Math.min(...data.map(el => el.start)) : 0
        let end = data.length > 0 ? +Math.max(...data.map(el => el.end)) : 1

        const dataGroups = groups.map(gr => {
            return setRowsInElements(data.filter(el => el.group == gr))
        })

        const groupsHeights = dataGroups.map(
            dataGroup => dataGroup.length > 0 ? Math.max(...dataGroup.map(el => el.row as number)) + 1 : 0
        )

        return {start, end, dataGroups, groupsHeights}
    }
    
    const [timechartData, setTimechartData] = useState(prepareData(data, groups))

    return [
        timechartData,
        (data: TimechartElementType[], groups: string[]) => setTimechartData(prepareData(data, groups))
    ]
}