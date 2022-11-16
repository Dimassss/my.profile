<template>
    <a-layout>
        <a-layout-sider
            :trigger="null"
            collapsible
            :collapsed="true"
            width="4em"
            collapsedWidth="4em"
            class="sider"
        >
            <a-menu
                mode="inline"
                :selectedKeys="[
                    $router.currentRoute
                        ? $router.currentRoute.path.split('/')[1]
                        : 'home'
                ]"
                items="menuItems"
                class="sider-menu"
            >
                <a-menu-item 
                    v-for="menuItem in menuItems" 
                    :key="menuItem.key"
                    class="menu-item"
                    :title="menuItem.title"
                    @click="() => openPage(menuItem.key)"
                >
                    <a-icon :type="menuItem.icon" class="menu-item-icon"/>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout class="layout-body">
            <a-layout-content>
                <Nuxt/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">

const menuItems = [
    {
        key: 'home',
        icon: 'home',
        title: "Home page"
    },
    {
        key: 'cv',
        icon: 'idcard',
        title: "Resume"
    },
    {
        key: 'timechart',
        icon: 'line-chart',
        title: "Progress Time Chart"
    },
    {
        key: 'contact',
        icon: 'edit',
        title: "Contact Information"
    }
]


export default {
    components: {
    },
    data() {
        return {
            menuItems
        }
    },
    computed: {

    },
    methods: {
        openPage(path: string){
            this.$router.push(path)
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-item-icon {
    font-size: 2em !important;
    line-height: 2em !important;
    width: 2em;
}

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