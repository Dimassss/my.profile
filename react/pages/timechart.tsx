import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import Timechart from "../components/graph/timechart/Timechart";
import TimechartSelector from "../components/graph/timechart/TimechartSelector";
import Center from "../components/positioning/Center";
import DefaultLayout from "../layouts/DefaultLayout";
import axios from "../plugins/axios";

const getDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    
    const monthTbl = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return `${day+1} ${monthTbl[month]} ${year}`
}

export default function TimechartPage(){
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [[start, end], setDataRange] = useState([] as number[])
    const containerRef = useRef(null as any)

    useEffect(() => {
        setIsFetching(true)

        axios.get('knowledge').then((res) => {
            let d = res.data
            d = d.map((el: any, i: number) => {
                el.start = el.learnStartTimestamp
                el.end = el.learnEndTimestamp
                el.group = [1, 2, 1, 3, 2, 1][i % 5].toString()

                return el
            })
            setData(d)
            setIsFetching(false)
        })
    }, [])

    return (<DefaultLayout>
        {
            isFetching
            ? (<Center height="100vh">
                <Spin indicator={<LoadingOutlined style={{ fontSize: '3em' }} spin />} />
            </Center>)
            : (<div style={{width: "100%", minHeight: "100vh"}} ref={containerRef}>
                <Center height="100vh">
                    <Timechart
                        data={data} 
                        groups={['1', '2', '3']}
                        width={containerRef.current ? Math.max(20, containerRef.current.clientWidth) : 800}
                        height={500}
                        start={start}
                        end={end}
                        name="preview"
                    />
                    <TimechartSelector
                        name={"preview-selector"}
                        data={data} 
                        groups={['1', '2', '3']}
                        width={containerRef.current ? Math.max(20, containerRef.current.clientWidth) : 800}
                        height={80}
                        onChange={(s,e) => {
                            setDataRange([s,e])
                        }}
                    />
                </Center>
            </div>)
        }
    </DefaultLayout>)
}