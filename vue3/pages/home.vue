<template>
  <div :class='$style.container'>
    <a-row justify="space-around" align="middle" :class="$style['row-container']">
        <a-col v-if="screens.lg" :span='12' :style='{padding: "2em"}'>
            <Center>
                <img src="me.jpg" alt="My photo" :class="$style['my-image']"/>
            </Center>
        </a-col>
        <a-col :lg='12' :md='24'>
        <a-row justify="space-around" align="middle">
            <a-col v-if="screens.lg" :span='24' :class='$style["title-block"]'>
                <a-typography-title :class='[$style["title-1"], $style["title"]].join(" ")'>
                    Hello!
                </a-typography-title>
            </a-col>
            <Center v-if="!screens.lg" :style='{marginBottom: "4em"}'>
                <a-col :span="24">
                <a-avatar
                    :class="$style['my-image']"
                    :size='250'
                    src="me.jpg"
                />
                </a-col>
            </Center>
            <a-col :span="24" :class='$style["title-block"]'>
                <a-typography-title :level="screens.md ? 2 : 1" :class='[$style["title-2"], $style["title"]].join(" ")'>
                    {{!screens.lg ? 'Hello!' : ''}} I&apos;m Dmytro Karpus
                </a-typography-title>
            </a-col>

            <a-col :lg="24" :md="24" :class='$style["description-block"]'>
                <a-typography-title :level="3">{{texts[0].title}}</a-typography-title>
                <p>{{texts[0].text}}</p>
            </a-col>
        </a-row>
      </a-col>
    </a-row>
  
    <a-row justify="space-around" align="top" :style='{marginTop: screens.lg ? "8em" : "0", width: "100%"}'>
      <a-col :lg="12" :md="24" :class='$style["description-block"]'>
          <a-typography-title :level="3">{{texts[1].title}}</a-typography-title>
          <p>{{texts[1].text}}</p>
      </a-col>
      <a-col :lg="12" :md="24" :class='$style["description-block"]'>
          <a-typography-title :level="3">{{texts[2].title}}</a-typography-title>
          <p>{{texts[2].text}}</p>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import Center from '~/components/positioning/Center.vue'
import useResizeEffect, { ScreenSizeType } from '~/lib/hooks/useResizeEffect'

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


export default {
  components: {
    Center
  },
  data(){
    return {
      texts,
      screens: {} as ScreenSizeType
    }
  },
  created(){
    useResizeEffect('home-page', (screenSize) => {
      this.screens = screenSize
      console.log(screenSize)
    })
  },
  updated() {
    console.log('updated')
  }
}
</script>

<style lang="scss" module>
@import '../styles/themes/colors.scss';

.container {
  width: 100%;
  padding-bottom: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $blue-1;
  padding-top: 3em;
  position: relative;
  min-height: 100vh;

  .row-container {
    width: 100%
  }
  
  &::before {
    background-image: url('https://gitlab.com/dwt1/wallpapers/-/raw/master/0016.jpg');
    background-repeat: no-repeat;
    background-size: fill;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    filter: opacity(0.15);
  }

  .title {
    margin-top: 0;
  }

  .title-1 {
    margin-bottom: 0;
  }

  .title-2 {
    margin-bottom: 2em;
  }

  .my-image{
    box-shadow: 1px 1px 10px $grey-3;
    width: 100%;
    max-width: 500px;
  } 

  .title-block {
    padding: 1em;
    max-width: 50em;
  }

  .description-block {
    padding: 1em;
    padding-top: 2em;
    max-width: 50em;
  }
}
</style>