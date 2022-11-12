export type TimechartElementType = {
    name: string, 
    start: number,  //timestamp
    end: number,
    row?: number    //row number in its group
    group?: string
}