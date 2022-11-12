import React from "react"

export type TimechartContextConfigUpdateType = {
    dataStart?: number,
    dataEnd?: number,
    dataDelta?: number,
    rows?: number,           //number of rows in timechart
}

export type TimechartContextConfigType = {
    dataStart: number,
    dataEnd: number,
    dataDelta: number,
    rows: number,           //number of rows in timechart
    updateContext: (cfg: TimechartContextConfigUpdateType) => void
}

const timechartContextConfig: TimechartContextConfigType = {
    dataStart: 0, 
    dataEnd: 1,
    dataDelta: 1,
    rows: 0,
    updateContext: (cfg) => {}
}

const TimechartContext = React.createContext(timechartContextConfig)

export default TimechartContext