import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import Timechart from "../components/graph/timechart/Timechart";
import TimechartSelector from "../components/graph/timechart/TimechartSelector";
import Center from "../components/positioning/Center";
import DefaultLayout from "../layouts/DefaultLayout";
import axios from "../plugins/axios";

export default function TimechartPage(){
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(false)
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
                    <TimechartSelector
                        data={data} 
                        groups={['1', '2', '3']}
                        width={containerRef.current ? Math.max(20, containerRef.current.clientWidth) : 800}
                    />
                </Center>
            </div>)
        }
    </DefaultLayout>)
}