import { PropsWithChildren, useContext, useEffect, useState } from "react"
import TimechartContext from "./timechart-context"
import TimechartViewboxContext from "./timechart-viewbox-context"
import { TimechartElementType } from "./timechart.types"
import TimechartGroup from "./TimechartGroup"

interface Props extends PropsWithChildren{
    start: number   //timestamp
    end: number     //timestamp
    dataGroups: TimechartElementType[][]
    groupsHeights: number[]
}

const styleClasses: string[] = []

export default function TimechartViewbox({start, end, children, dataGroups, groupsHeights}: Props){
    const {dataStart, dataEnd, width, height, rows, name} = useContext(TimechartContext)

    const styleClass = `svg-container-${name}`

    return (<TimechartViewboxContext.Provider value={{
            start: start == undefined ? dataStart : start, 
            end: end == undefined ? dataEnd : end,
        }}>
        <svg 
            viewBox={`${0} 0 ${width} ${height}`}
            width={width} 
            height={height} 
            style={{background: "#ccc"}}
            preserveAspectRatio="none"
        >
            <style>{`
                .${styleClass} g.el-text text {
                    font-size: 1em;
                    line-height: 1em;
                    text-anchor: start;
                    transform: rotate(270deg);
                    fill: #222
                }
            `}</style>
            <defs>
                <filter id="glow" x="-10%" y="-10%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="1 1" result="glow"/>
                    <feMerge>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="glow"/>
                    </feMerge>
                </filter>
            </defs>
            <g className={styleClass}>
                {
                    dataGroups.map((dataGroup,i) => (<TimechartGroup 
                        key={i}
                        data={dataGroup} 
                        rowOffsetY={groupsHeights.filter((el,j) => j < i).reduce((a,b) => a+b, 0)}
                    />))
                }
                {children}
            </g>
        </svg>
    </TimechartViewboxContext.Provider>)
}