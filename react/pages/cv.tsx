import DefaultLayout from "../layouts/DefaultLayout";
import dynamic from 'next/dynamic'
import { Grid, List } from "antd";
import { useEffect, useState } from "react";
import { ResumeTreeType } from "../components/graph/resume/resumes";
import axios from "../plugins/axios";
import styles from "../styles/pages/cv.module.scss"

const { useBreakpoint } = Grid

const makeListFromTree = (tree: any) => {
    if(!tree) return tree;
    if(!tree.children) return <p style={{color: "#999"}}><a href="#">{tree.name}</a></p>
    else {
        //check if all childrens are not parents
        const childrenArePure = tree.children.reduce((a: boolean, el: any) => a || !!el.children, false)

        return [
            (<p className={styles["resume-list-element"]} key={tree.name}>
                <a href="#">{tree.name}</a>: 
                <span>
                    {tree.children.map((el: any) => el.name).join(', ')}
                </span>
            </p>),
            ...(childrenArePure
                ? tree.children.map((subTree: any) => makeListFromTree(subTree))
                : [])
        ]
    }
}

export default function CV(){
    const ResumeGraph = dynamic(() => import('../components/graph/resume/ResumeGraph'), {
        ssr: false
    })
    const screens = useBreakpoint()
    const [resumeTree, setResumeTree] = useState(null as unknown as ResumeTreeType)

    useEffect(() => {
        axios.get('resumes').then(({data}) => {
            setResumeTree(data)
        })
    }, [])

    return (<DefaultLayout>{
        screens.md
        ? (<ResumeGraph 
            resumeTree={resumeTree} 
            onResumeClick={res => {
                console.log(res)
            }}
        />)
        : (<div className={styles["resume-list-container"]}>{makeListFromTree(resumeTree)}</div>)

    }</DefaultLayout>)
}