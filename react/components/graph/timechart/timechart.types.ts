export type TimechartElementType = {
    name: string, 
    start: number,  //timestamp
    end: number,
    row?: number    //row number in its group
    group?: string
}

export type useTimechartDataReturnType = [
    {
        start: number;
        end: number;
        dataGroups: TimechartElementType[][];
        groupsHeights: number[];
    },
    (data: TimechartElementType[], groups: string[]) => void
]

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