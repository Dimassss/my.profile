import React from "react"
import { TimechartContextConfigType } from "./timechart.types"

const timechartContextConfig: TimechartContextConfigType = {
    dataStart: 0, 
    dataEnd: 1,
    dataDelta: 1,
    rows: 0,
    width: 1,
    height: 1,
    displayNames: true,
    updateContext: (cfg) => {}
}

const TimechartContext = React.createContext(timechartContextConfig)

export default TimechartContext