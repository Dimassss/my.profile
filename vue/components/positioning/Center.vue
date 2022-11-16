<template>
    <div class="container-center">
        <div>
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data(){
        return {}
    }
}
</script>

<style lang="scss" scoped>
.container-center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>