import DefaultLayout from "../layouts/DefaultLayout";
import dynamic from 'next/dynamic'

export default function CV(){
    const ResumeGraph = dynamic(() => import('../components/graph/resume/ResumeGraph'), {
        ssr: false
    })

    return (<DefaultLayout>
        <ResumeGraph/>
    </DefaultLayout>)
}