import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import Timechart from "../components/graph/timechart/Timechart";
import TimechartSelector from "../components/graph/timechart/TimechartSelector";
import Center from "../components/positioning/Center";
import DefaultLayout from "../layouts/DefaultLayout";
import axios from "../plugins/axios";
import styles from '../styles/pages/timechart.module.scss'

const pallets = [
    ["#011936", "#465362", "#82A3A1", "#9FC490", "#C0DFA1"]
]

export default function TimechartPage(){
    const [data, setData] = useState([])
    const [groups, setGroups] = useState([
        {name: '1', color: pallets[0][0]},
        {name: '2', color: pallets[0][1]},
        {name: '3', color: pallets[0][2]},
        {name: '4', color: pallets[0][2]},
        {name: '5', color: pallets[0][2]}
    ])
    const [isFetching, setIsFetching] = useState(false)
    const [[start, end], setDataRange] = useState([] as number[])
    const [rows, setRows] = useState(1)
    const containerRef = useRef(null as any)
    const containerHeight = (defH: number) => typeof window !== 'undefined' ? Math.max(20, window.innerHeight) : defH
    const containerWidth = (defW: number) => containerRef.current ? Math.max(20, containerRef.current.clientWidth) : defW

    useEffect(() => {
        setIsFetching(true)

        axios.get('knowledge').then((res) => {
            let d = res.data
            d = d.map((el: any, i: number) => {
                el.start = el.learnStartTimestamp
                el.end = el.learnEndTimestamp
                el.group = [1, 5, 3, 1, 2, 4][i % 5].toString()

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
            : (<div className={styles["timchart-container"]} ref={containerRef}>
                <div className={styles["timechart-preview"]}>
                    <Timechart
                        data={data} 
                        groups={groups}
                        width={containerWidth(800)-20}
                        height={Math.max(containerHeight(500), rows*80)}
                        start={start}
                        end={end}
                        name="preview"
                        onDraw={(cfg) => {
                            setRows(cfg.rows)
                        }}
                    />
                </div>
                <div className={styles["timechart-selector"]}>
                    <Center>
                        <TimechartSelector
                            name={"preview-selector"}
                            data={data} 
                            groups={groups}
                            width={containerWidth(800)}
                            height={80}
                            onChange={(s,e) => {
                                setDataRange([s,e])
                            }}
                        />
                    </Center>
                </div>
            </div>)
        }
    </DefaultLayout>)
}