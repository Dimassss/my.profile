import fcose from 'cytoscape-fcose';
import cytoscape from "cytoscape";
import { memo, useEffect, useRef } from "react";
import { convertTree, ResumeTreeType } from './resumes';
import config from './config';

cytoscape.use( fcose )

type Props = {
    resumeTree: ResumeTreeType,
    onResumeClick?: (resume: any) => void
}

function ResumeGraph({resumeTree, onResumeClick = () => {}}: Props){
    const ref = useRef(null)

    useEffect(() => {
        if(!resumeTree) return;

        let [nodes, edges] = convertTree(resumeTree)

        const cs = cytoscape({
            elements: [...nodes, ...edges],
            ...config
        })
        
        if(ref.current && typeof window !== 'undefined') {
            (ref.current as any).innerHTML = ''
            cs.reset()
            cs.mount(ref.current)
            cs.fit()
            cs.zoom(0.9 * cs.zoom())
            cs.center()
            cs.autolock(false)
            cs.off('tap')
            cs.on('tap', 'node', function(evt){
                onResumeClick(evt.target.data().resume)
            });

            cs.layout({
                name: "fcose"
            }).run()
        }
    }, [ref.current, resumeTree])

    return (
        <div ref={ref} style={{width: "100%", height: "100vh"}}></div>
    )
}

export default memo(ResumeGraph)