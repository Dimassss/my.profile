import fcose from 'cytoscape-fcose';
import cytoscape from "cytoscape";
import { memo, useEffect, useRef } from "react";
import resumes from './resumes';
import config from './config';

cytoscape.use( fcose )


function ResumeGraph(){
    const ref = useRef(null)

    useEffect(() => {
        const cs = cytoscape({
            elements: resumes,
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

            cs.layout({
                name: "fcose"
            }).run()
        }
    }, [ref.current])

    return (
        <div ref={ref} style={{width: "100%", height: "100vh"}}></div>
    )
}

export default memo(ResumeGraph)