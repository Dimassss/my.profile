import { LoadingOutlined } from "@ant-design/icons";
import { Slider, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import Timechart from "../components/graph/timechart/Timechart";
import TimechartSelector from "../components/graph/timechart/TimechartSelector";
import Center from "../components/positioning/Center";
import DefaultLayout from "../layouts/DefaultLayout";
import axios from "../plugins/axios";
import styles from '../styles/pages/timechart.module.scss'

const pallets = [
    ["#880e4f", "#3e2723", "#263238", "#4a148c", "#006064", "#004d40", "#560027"],
    ["#002171", "#002f6c", "#1b5e20", "#33691e", "#827717", "#bc5100", "#ff6f00", "#e65100", "#bf360c"]
]

const groupsConfig = (i:number, j: number) => [
    {name: '1', color: pallets[i][j]},
    {name: '2', color: pallets[i][j+1]},
    {name: '3', color: pallets[i][j+2]},
    {name: '4', color: pallets[i][j+3]},
    {name: '5', color: pallets[i][j+4]}
]
const i = 0
const j = 0

export default function TimechartPage(){
    const [data, setData] = useState([])
    const [groups, setGroups] = useState(groupsConfig(i,j))
    const [isFetching, setIsFetching] = useState(false)
    const [[start, end], setDataRange] = useState([] as number[])
    const [rows, setRows] = useState(1)
    const containerRef = useRef(null as any)
    const [forceUpdate, setForceUpdate] = useState({})
    const containerHeight = (defH: number) => typeof window !== 'undefined' ? Math.max(20, window.innerHeight) : defH
    const containerWidth = (defW: number) => containerRef.current ? Math.max(20, containerRef.current.clientWidth) : defW

    useEffect(() => {
        setIsFetching(true)

        axios.get('knowledge').then((res) => {
            let d = res.data
            d = d.map((el: any, i: number) => {
                el.start = el.learnStartTimestamp
                el.end = el.learnEndTimestamp
                el.group = [1, 5, 3, 4, 2][i % 5].toString()

                return el
            })
            setData(d)
            setIsFetching(false)
        })
    }, [])

    useEffect(() => {
        window.onresize = () => {
            setForceUpdate({})
        }
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
                            width={containerWidth(800) - 20}
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