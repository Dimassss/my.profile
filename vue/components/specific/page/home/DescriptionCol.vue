<template>
    <a-col :lg="col.lg" :md="col.md" class='description-block'>
        <h3>{{title}}</h3>
        <p>{{text}}</p>
    </a-col>
</template>

<script lang="ts">
export default {
    props: ['title', 'text', 'col']
}
</script>

<style lang="scss" scoped>
.description-block {
    padding: 1em;
    padding-top: 2em;
    max-width: 50em;
}
</style>