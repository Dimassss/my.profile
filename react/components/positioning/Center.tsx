import { CSSProperties } from "react";
import { PropsWithChildren } from "react";
import styles from '../../styles/components/positioning/Center.module.scss'

interface Props extends PropsWithChildren {
    height?: string,
    width?: string,
    style?: CSSProperties
}

export default function Center({children, height, width, style}: Props){
    return (<div className={styles.container} style={{height, width, ...style}}>
            <div>{children}</div>
        </div>)
}