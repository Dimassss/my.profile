<template>
    <div :class='$style.container' :style='{height, width}'>
        <div><slot/></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
    props: ['width', 'height']
}
</script>

<style lang="scss" module>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>