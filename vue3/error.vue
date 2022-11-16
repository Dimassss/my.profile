<template>
    <DefaultLayout>
        <Center height="100vh">
            <a-typography-title>404</a-typography-title>
            <a-typography-text>
                <a href="/home">Go home</a>
            </a-typography-text>
        </Center>
    </DefaultLayout>
</template>

<script setup>
import Center from './components/positioning/Center'
import DefaultLayout from './layouts/default'

setPageLayout('default')
</script>

