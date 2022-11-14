import DefaultLayout from "../layouts/DefaultLayout";
import { Typography, Image, Grid, Avatar, Row, Col } from 'antd';
import styles from "../styles/pages/home.module.scss"
import Center from "../components/positioning/Center";

const { useBreakpoint } = Grid
const { Title } = Typography;

const texts = [
  {
    title: "General description:",
    text: `I am a decisive, proactive person who is always ready to solve complex problems, even if I have no experience 
          in this field. Calm, ambivert and always aimed on victory, I don't smoke or drink, and I do sports regularly. 
          I have strategic thinking, but I can also work at the tactical and operational levels.`
  },
  {
    title: "Communication style:",
    text: `Everything related to technology, mathematics and other sciences, and I also like to study
          or talk about topics related to philosophy and solving global issues. Also
          I am interested in general and analytical psychology.`
  },
  {
    title: "What do I appreciate in people:",
    text: `Interest and development in at least one topic. Purposefulness, clear understanding
          their desires and absence
          the mindset of a loser. Strategic thinking and the ability to work in a team and understanding that
          this skill consists in the fact that you direct your forces to the execution of a joint task and
          creating conditions for others so that they can solve this problem as well, and not just pleasant chatter.`
          
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
