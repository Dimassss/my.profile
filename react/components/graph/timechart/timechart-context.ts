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
    width: number,          //container width in px
    height: number,         //container height in px
    updateContext: (cfg: TimechartContextConfigUpdateType) => void
}

const timechartContextConfig: TimechartContextConfigType = {
    dataStart: 0, 
    dataEnd: 1,
    dataDelta: 1,
    rows: 0,
    width: 1,
    height: 1,
    updateContext: (cfg) => {}
}

const TimechartContext = React.createContext(timechartContextConfig)

export default TimechartContext