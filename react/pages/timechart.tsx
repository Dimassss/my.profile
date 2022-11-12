import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import Timechart from "../components/graph/timechart/Timechart";
import TimechartSelector from "../components/graph/timechart/TimechartSelector";
import Center from "../components/positioning/Center";
import DefaultLayout from "../layouts/DefaultLayout";
import axios from "../plugins/axios";

export default function TimechartPage(){
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(false)

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
            : (<Center height="100vh">
                    <TimechartSelector
                        data={data} 
                        groups={['1', '2', '3']}
                    />
            </Center>)
        }
    </DefaultLayout>)
}