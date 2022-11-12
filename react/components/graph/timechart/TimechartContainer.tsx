import { PropsWithChildren, useEffect, useState } from "react"
import styles from "../../../styles/components/graph/timechart/Timechart.module.scss"
import TimechartContext, { TimechartContextConfigType, TimechartContextConfigUpdateType } from "./timechart-context"
import { TimechartElementType } from "./timechart.types"
import TimechartElement from "./TimechartElement"
import TimechartViewbox from "./TimechartViewbox"

interface Props extends PropsWithChildren{
    data: TimechartElementType[]
    rows: number
    width: number,
    height: number
}

export default function TimechartContainer({data, rows, width, height, children}: Props){
    //calculating dataStart and dataEnd
    let a = +Math.min(...data.map(d => d.start))
    let b = +Math.max(...data.map(el => el.end))

    a = !isNaN(a) && isFinite(a) ? a : 0
    b = !isNaN(b) && isFinite(b) ? b : 1

    const [dataStart, setDataStart] = useState(a)
    const [dataEnd, setDataEnd] = useState(b)

    useEffect(() => {
        let a = +Math.min(...data.map(d => d.start))
        let b = +Math.max(...data.map(el => el.end))

        a = !isNaN(a) && isFinite(a) ? a : 0
        b = !isNaN(b) && isFinite(b) ? b : 1

        setDataStart(a)
        setDataEnd(b)

        setTimechartContextConfig({
            ...timechartContextConfig,
            dataStart: a,
            dataEnd: b,
            dataDelta: b - a
        } as TimechartContextConfigType)
    }, [data])

    useEffect(() => {
        setTimechartContextConfig({
            ...timechartContextConfig,
            rows, width, height
        })
    }, [rows, width, height])

    const [timechartContextConfig, setTimechartContextConfig] = useState({
        dataStart,
        dataEnd,
        dataDelta: dataEnd - dataStart,
        rows, 
        width, 
        height,
        updateContext: (cfg: TimechartContextConfigUpdateType) => {
            setTimechartContextConfig(({...timechartContextConfig, ...cfg}))
        }
    } as TimechartContextConfigType)

    return (<TimechartContext.Provider value={timechartContextConfig}>
        {children}
    </TimechartContext.Provider>)
}