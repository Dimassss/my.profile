<template>
    <div class="avatar-container" :style="{width: size + 'px', height: size + 'px'}">
        <CustomImage class="avatar" :src="src"/>
    </div>
</template>

<script>
import CustomImage from './CustomImage.vue'

export default {
    props: ['src', 'size'],
    components: {
        CustomImage
    }
}
</script>

<style lang="scss" scoped>
.avatar-container {
    width: 100%;
    position: relative;
    border-radius: 100%;
    overflow: hidden;

    .avatar {
        width: 100%;
        vertical-align: middle;
    }
}
</style>