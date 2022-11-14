import DefaultLayout from "../layouts/DefaultLayout";
import { Typography, Image, Grid, Avatar, Row, Col } from 'antd';
import styles from "../styles/pages/home.module.scss"
import Center from "../components/positioning/Center";

const { useBreakpoint } = Grid
const { Title } = Typography;

const texts = [
  {
    title: "General description:",
    text: `Я рішуча проактивна особистість, яка завжди готова до вирішування складних проблем,
          навіть якщо я не маю спочатку в цьому досвіду. Спокійний, амбіверт і завжди заряджений на перемогу, 
          Не курю і не п'ю, а також займаюсь регулярно спортом. Маю стратегічне мислення, але також вмію працювати
          на тактичному і оперативному рівнях.`
  },
  {
    title: "Communication style:",
    text: `Все що відноситься до технологій, математики і інших наук, а також люблю вивчати
          чи розмовляти на теми звязані з філософією і вирішенню глобальних питань. Також
          цікавлюсь загальной і аналітичной психологією.`
  },
  {
    title: "What do I appreciate in people:",
    text: `Зацікавленість і розвиненість хоча б в одній якійсь темі. Цілеспрямованість, чітке розуміння
          своїх бажань і відсутність
          мислення лузера. Статегічне мислення і вміння працювати в команді і розуміння, що
          це вміння полягає на тому, що ти спрямовуєш свої сили на виконная спільної задачі і 
          створення умов для інших, щоб вони могли цю задачу вирішувати також, а не тільки приємні балачки.`
  }
]

function DescriptionCol({title, text, col}: any) {
  return (<Col lg={col.lg} md={col.md} key={title} className={styles['description-block']}>
    <Title level={3}>{title}</Title>
    <p>{text}</p>
  </Col>)
}

export default function Home() {
  const screens = useBreakpoint()

  return (
    <DefaultLayout>
      <div className={styles['container']}>
        <Row justify={"space-around"} align="middle">
          {screens.lg
            ? (<Col span={12} style={{padding: "2em"}}>
              <Center>
                <Image src={"me.jpg"} alt={"My photo"} preview={false} className={styles["my-image"]}/>
              </Center>
            </Col>)
            : undefined
          }
          <Col lg={12} md={24}>
            <Row justify="space-around" align={"middle"}>
              <Col span={24} className={styles['title-block']}>
                <Title className={[styles['title-1'], styles['title']].join(' ')}>
                  {screens.lg ? 'Hello!' : ''}
                </Title>
              </Col>
              {!screens.lg
                ? (<Center style={{marginBottom: "4em"}}>
                    <Col span={24}>
                      <Avatar
                        className={styles["my-image"]}
                        size={250}
                        src={<Image src={"me.jpg"} alt={"My photo"} preview={false}/>}
                      />
                    </Col>
                  </Center>)
                : undefined
              }
              <Col span={24} className={styles['title-block']}>
                <Title level={screens.md ? 1 : 2} className={[styles['title-2'], styles['title']].join(' ')}>
                  {!screens.lg ? 'Hello!' : ''} I&apos;m Dmytro Karpus
                </Title>
              </Col>

              <DescriptionCol title={texts[0].title} text={texts[0].text} col={{lg: 24, md: 24}}/>
            </Row>
          </Col>
        </Row>
        <Row justify={"space-around"} align="top" style={{marginTop: screens.lg ? "8em" : '0', width: "100%"}}>
          <DescriptionCol title={texts[1].title} text={texts[1].text} col={{lg: 12, md: 24}}/>
          <DescriptionCol title={texts[2].title} text={texts[2].text} col={{lg: 12, md: 24}}/>
        </Row>
      </div>
    </DefaultLayout>
  )
}
