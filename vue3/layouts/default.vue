<template>
    <a-layout>
        <a-layout-sider
            :trigger="null"
            collapsible
            :collapsed="true"
            width="4em"
            collapsedWidth="4em"
            :class="$style.sider"
        >
            <a-menu
                mode="inline"
                :selectedKeys="[selected]"
                :class="$style['sider-menu']"
                @click="({key}) => openPage(key)"
            >
                <a-menu-item 
                    v-for="menuItem in menuItems" 
                    :key="menuItem.key"
                > 
                    {{menuItem.title}}
                    <template #icon>
                        <component :is="menuItem.icon"/>
                    </template>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :class="$style['layout-body']">
            <a-layout-content>
                <slot/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { HomeOutlined, IdcardOutlined, CommentOutlined, LineChartOutlined } from '@ant-design/icons-vue';


const menuItems = [
    {
        key: 'home',
        icon: HomeOutlined,
        className: "menu-item",
        title: "Home page"
    },
    {
        key: 'cv',
        icon: IdcardOutlined,
        className: "menu-item",
        title: "Resume"
    },
    {
        key: 'timechart',
        icon: LineChartOutlined,
        className: "menu-item",
        title: "Progress Time Chart"
    },
    {
        key: 'contact',
        icon: CommentOutlined,
        className: "menu-item",
        title: "Contact Information"
    }
]

export default {
    components: {
        HomeOutlined
    },
    data() {
        return {
            menuItems,
            selected: 'home'
        }
    },
    methods: {
        openPage(path: string){
            this.selected = path
            this.$router.push(path)
        }
    },
    beforeMount(){
        const p = this.$router.currentRoute.value.path
        this.selected = p.split('/')[1] ? p.split('/')[1] : 'home'
    }
}
</script>

<style lang="scss" module>

.menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
    margin: 0;
    width: 4em;
}

.sider {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1em;
    z-index: 1;

    .sider-menu {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        height: 100vh;
        font-size: 2em;
    }
}

.layout-body {
    min-height: 100vh;
    margin-left: 4em;
}
</style>