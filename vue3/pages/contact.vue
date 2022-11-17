<template>
    <div :class="$style.container">
        <div>
            <a-spin v-if="isPending">
            </a-spin>
            <ul v-else-if="!isPending && showInfo">
                <li 
                    v-for="c in contacts"
                    :key="unobfuscate(c.name)"
                    @click="() => window.open(unobfuscate(c.href), '_blank')"
                >
                    <component :is="c.icon"/> {{unobfuscate(c.name)}}
                </li>
            </ul>
            <VueRecaptcha
                v-else
                :sitekey="$config.RECAPTCHA_SITE_KEY+''"
                @verify="handleRecaptchaSubmit"
            ></VueRecaptcha>
        </div>
    </div>    
</template>

<script lang="ts">
import { MailOutlined, GithubOutlined, LinkedinOutlined, SendOutlined, InstagramOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { VueRecaptcha } from 'vue-recaptcha'
import axios from 'axios'


//this text obfuscation is needed to be sure that any page scrappers and bots will not get my contact information
let obfuscate = (str: string) => Array.from(str).map(l => Array.from(keytbl).indexOf(l))
let unobfuscate = (obfStr: number[]) => obfStr.map(i => keytbl[i]).join('')
const keytbl = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=!@#$%^&*()_+[];',./{}:\"<>? "

const contacts = [
    {
        "icon": MailOutlined,
        "name": [40,25,10,7,18],
        "href": [25,10,7,18,4,8,85,12,7,25,10,11,81,17,10,3,9,6,11,11,11,11,65,14,25,10,7,18,81,21,8,25],
        "value": [12,7,25,10,11,81,17,10,3,9,6,11,11,11,11,65,14,25,10,7,18,81,21,8,25]
    },
    {
        "icon": GithubOutlined,
        "name": [40,7,4,41,6,23],
        "href": [15,4,4,9,11,85,82,82,14,7,4,15,6,23,81,21,8,25,82,38,7,25,10,11,11,11,11],
        "value": [65,38,7,25,10,11,11,11,11]
    },
    {
        "icon": LinkedinOutlined,
        "name": [44,7,24,17,2,12,33,24],
        "href": [15,4,4,9,11,85,82,82,1,1,1,81,18,7,24,17,2,12,7,24,81,21,8,25,82,7,24,82,9,7,18,2,22,8,7,12,82],
        "value": [65,9,7,18,2,22,8,7,12]
    },
    {
        "icon": SendOutlined,
        "name": [30,2,18,2,14,3,10,25],
        "href": [15,4,4,9,11,85,82,82,4,81,25,2,82,24,6,18,18,7,11,4,15,2,3,2],
        "value": [65,24,6,18,18,7,11,4,15,2,3,2]
    },
    {
        "icon": InstagramOutlined,
        "name": [7, 24, 11, 4, 10, 14, 3, 10, 25],
        "href": [15, 4, 4, 9, 11, 85, 82, 82, 1, 1, 1, 81, 7, 24, 11, 4, 10, 14, 3, 10, 25, 81, 21, 8, 25, 82, 12, 7, 25, 10, 11, 17, 10, 3, 9, 6, 11, 82],
        "value": [65, 12, 7, 25, 10, 11, 17, 10, 3, 9, 6, 11]
    }
].map(el => ({...el, }))

export default {
    components: {
        VueRecaptcha
    },
    data(){
        return {
            contacts,
            isPending: false,
            showInfo: false
        }
    },
    methods: {
        unobfuscate,
        async handleRecaptchaSubmit(token: string) {
            this.isPending = true
            
            try {
                const {data} = await axios.post<boolean>('api/recaptcha', {token})
                this.showInfo = data
            } catch(e) {
                console.error(e)
            } finally {
                this.isPending = false
            }
        }
    },
    mounted() {
        console.log(this.$config.RECAPTCHA_SITE_KEY)
    }
}
</script>

<style lang="scss" module>
@import "@/styles/themes/colors.scss";

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;

    ul {
        list-style-type: none;

        li {
            cursor: pointer;
            margin-top: 1em;
            border: 1px solid $grey-3;
            padding: 1em;
            background-color: $grey-2;
            color: $green-1;

            &:hover {
                background-color: $grey-3;
            }
        }
    }

    .open-btn {
        margin: auto;
        margin-top: 1em;
        
    }
}
</style>