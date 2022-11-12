import { PropsWithChildren } from "react";
import styles from '../../styles/components/positioning/Center.module.scss'

interface Props extends PropsWithChildren {
    height?: string,
    width?: string
}

export default function Center({children, height, width}: Props){
    return (<div className={styles.container} style={{height, width}}>
            <div>{children}</div>
        </div>)
}