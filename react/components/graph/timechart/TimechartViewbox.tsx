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
    const {dataStart, dataEnd, width, height, rows, name, groups} = useContext(TimechartContext)
    const [forceUpdate, setForceUpdate] = useState(1)

    useEffect(() => {
        setForceUpdate(forceUpdate+1 % 100)
    }, [height])

    const styleClass = `svg-container-${name}`

    return (<TimechartViewboxContext.Provider value={{
            start: start == undefined ? dataStart : start, 
            end: end == undefined ? dataEnd : end,
        }}>
        <svg 
            width={width} 
            //BUG: here component can be not updated forever, because value in ReactDOM is correct but in DOM is not. Force attr update helps 
            height={height + forceUpdate * 0.0000001}                         
            viewBox={`${0} 0 ${width} ${height}`}
            style={{
                background: "rgba(0,0,0,0)", 
                verticalAlign:"top"
            }}
            preserveAspectRatio="none"
        >
            <style>{`
                .${styleClass} g.el-text text {
                    font-size: 1em;
                    line-height: 1em;
                    text-anchor: start;
                    transform: rotate(290deg);
                    fill: #f57c00;
                    font-weight: normal;
                }

                g.el-text text.glow-duplication {
                    fill: #000;
                    filter: url(#glow);
                }

                ${groups.map(g => {
                    return `.group-${g.name} rect {
                        fill: ${g.color};
                    }`
                }).join("\n")}
            `}</style>
            <defs>
                <filter id="glow" x="0" y="0" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2 2" result="glow"/>
                    <feMerge>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="glow"/>
                    </feMerge>
                </filter>
            </defs>
            <g className={styleClass}>
                {
                    dataGroups.map((dataGroup,i) => (<TimechartGroup
                        name={dataGroup[0] ? dataGroup[0].group as string : `subs-${i+1}`}
                        key={dataGroup[0] ? dataGroup[0].group as string : `subs-${i+1}`}
                        data={dataGroup} 
                        rowOffsetY={groupsHeights.filter((el,j) => j < i).reduce((a,b) => a+b, 0)}
                    />))
                }
                {children}
            </g>
        </svg>
    </TimechartViewboxContext.Provider>)
}