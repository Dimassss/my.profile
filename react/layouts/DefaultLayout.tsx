import { Layout, Menu, Tooltip } from 'antd';
import { HomeOutlined, IdcardOutlined, CommentOutlined, LineChartOutlined } from '@ant-design/icons';
import styles from "../styles/layout/DefaultLayout.module.scss"
import { useRouter } from 'next/router';


const { Header, Footer, Sider, Content } = Layout;

interface Props extends React.PropsWithChildren {}

const menuItems = [
    {
        key: 'home',
        icon: <HomeOutlined className={styles["menu-item-icon"]}/>,
        className: styles["menu-item"],
        title: "Home page"
    },
    {
        key: 'cv',
        icon: <IdcardOutlined className={styles["menu-item-icon"]}/>,
        className: styles["menu-item"],
        title: "Resume"
    },
    {
        key: 'timechart',
        icon: <LineChartOutlined className={styles["menu-item-icon"]}/>,
        className: styles["menu-item"],
        title: "Progress Time Chart"
    },
    {
        key: 'contact',
        icon: <CommentOutlined className={styles["menu-item-icon"]}/>,
        className: styles["menu-item"],
        title: "Contact Information"
    }
]

export default function DefaultLayout({children}: Props){
    const router = useRouter()

    return (<Layout hasSider>
        <Sider 
            trigger={null} 
            collapsible
            collapsed={true}
            className={styles["sider"]}
            width={"4em"}
            collapsedWidth={"4em"}
        >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['home']}
                items={menuItems}
                className={styles["sider-menu"]}
                onSelect={(el) => {
                    router.push(el.key)
                }}
            />
        </Sider>
        <Layout className={styles["layout-body"]}>
            {children}
        </Layout>
    </Layout>)
}