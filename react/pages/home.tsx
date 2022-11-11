import DefaultLayout from "../layouts/DefaultLayout";
import { Typography, Image } from 'antd';
import styles from "../styles/pages/index.module.scss"

const { Title } = Typography;

export default function Home() {

  return (
    <DefaultLayout>
      <div className={styles['container']}>
        <Title className={styles['title-1']}>Hello! I&apos;m Dmytro Karpus</Title>
        <div className={styles['description']}>
          <Image src={"me.jpg"} alt={"My photo"} preview={false} className={styles["image"]}/>

          <div>
            <div>
              <p>My psychotype here</p>
              <p>My hobbies and activities</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
