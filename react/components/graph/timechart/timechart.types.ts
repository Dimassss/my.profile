export type TimechartElementType = {
    name: string, 
    start: number,  //timestamp
    end: number,
    row?: number    //row number in its group
    group?: string
}

export type useTimechartDataReturnType = [
    {
        dataGroups: TimechartElementType[][],
        groupsHeights: number[],
        minVal: number,
        maxVal: number
    },
    (data: TimechartElementType[], groups: string[]) => void
]

export type TimechartContextConfigType = {
    dataStart: number,
    dataEnd: number,
    dataDelta: number,
    rows: number,           //number of rows in timechart
    width: number,          //container width in px
    height: number,         //container height in px
    displayNames: boolean,
    name: string | number,
    updateContext: (cfg: TimechartContextConfigType) => void
}