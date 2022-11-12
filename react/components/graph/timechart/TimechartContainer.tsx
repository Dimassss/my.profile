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

    const [[dataStart, dataEnd, dataDelta], setDataRange] = useState([0,1,1])

    const [timechartContextConfig, setTimechartContextConfig] = useState({
        dataStart: a,
        dataEnd: b,
        dataDelta: b - a,
        rows, 
        width, 
        height,
        displayNames,
        updateContext: (cfg: TimechartContextConfigUpdateType) => {
            setTimechartContextConfig(({...timechartContextConfig, ...cfg}))
        }
    } as TimechartContextConfigType)

    useEffect(() => {
        let a = +Math.min(...data.map(d => d.start))
        let b = +Math.max(...data.map(el => el.end))

        a = !isNaN(a) && isFinite(a) ? a : 0
        b = !isNaN(b) && isFinite(b) ? b : 1

        setDataRange([a, b, b-a])
    }, [data])

    useEffect(() => {
        setTimechartContextConfig({
            dataStart,
            dataEnd,
            dataDelta,
            rows, 
            width, 
            height,
            displayNames,
            updateContext: (cfg: TimechartContextConfigType) => {
                setTimechartContextConfig(cfg)
            }
        } as TimechartContextConfigType)
    }, [dataStart, dataEnd, rows, width, height, displayNames])

    return (<TimechartContext.Provider value={timechartContextConfig}>
        {children}
    </TimechartContext.Provider>)
}