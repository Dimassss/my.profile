import { PropsWithChildren, useEffect, useState } from "react"
import TimechartContext from "./timechart-context"
import { TimechartContextConfigType, TimechartContextConfigUpdateType, TimechartElementType } from "./timechart.types"

interface Props extends PropsWithChildren{
    data: TimechartElementType[],
    rows: number,
    width: number,
    height: number,
    displayNames: boolean,
}

export default function TimechartContainer({data, rows, width, height, children, displayNames}: Props){
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
            rows, width, height, displayNames
        })
    }, [rows, width, height, displayNames])

    const [timechartContextConfig, setTimechartContextConfig] = useState({
        dataStart,
        dataEnd,
        dataDelta: dataEnd - dataStart,
        rows, 
        width, 
        height,
        displayNames,
        updateContext: (cfg: TimechartContextConfigUpdateType) => {
            setTimechartContextConfig(({...timechartContextConfig, ...cfg}))
        }
    } as TimechartContextConfigType)

    return (<TimechartContext.Provider value={timechartContextConfig}>
        {children}
    </TimechartContext.Provider>)
}