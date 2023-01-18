<template>
    <div>
        <div :class='$style["help-text"]'>
            <a-typography-title :level="3">
                You can click on <span :style='{color: "#d71"}'>orange</span> elements to see the CV
            </a-typography-title>
        </div>
        <resume-graph
            v-if="screens.md"
            :resumeTree="resumeTree" 
            @resume-click="handleResumeClick"
        />
        <div v-else :class='$style["resume-list-container"]'>
            <p
                v-for="el in resumeList"
                :key="el.key"
                :class="$style[el.className]"
            >
                <a :style="{color: el.color}" :href="el.href">{{el.name}}</a>
                <span v-if="el.subText">{{el.subText}}</span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useBreakpoints from '@/lib/hooks/useBreakpoints'
import ResumeGraph from '@/components/graph/resume/ResumeGraph.vue';

const makeListFromTree = (tree: any) => {
    if(!tree) return [];

    const arr = [{
        color: tree.url ? "#d71" : "#999",
        className: "resume-list-element",
        key: tree.name,
        href: tree.url,
        name: tree.name,
        subText: ''
    }]

    if(tree.children) {
        arr[0].subText = tree.children.map((el: any) => el.name).join(', ')
        
        //check if all childrens are not parents
        const childrenArePure = tree.children.reduce((a: boolean, el: any) => a || !!el.children, false)
        if(childrenArePure) {
            arr.push(...tree.children
                .map((subTree: any) => makeListFromTree(subTree))
                .reduce((a: any[], b: any[]) => [...a, ...b], [])
            )
        }
    }

    return arr
}

const handleResumeClick = (res: any) => {
    if(res.url) {
        window.open(res.url, '_blank')
    }
}

const resumeTree = ref({})
const resumeList = ref(makeListFromTree(resumeTree.value))
const screens = useBreakpoints()


$fetch('/api/resume').then(tree => {
    resumeTree.value = tree
    resumeList.value = makeListFromTree(tree)
})
</script>



<style lang="scss" module>
@import "@/styles/themes/colors.scss";

.resume-list-container {
    padding: 1em;
    color: $grey-4;

    .resume-list-element {
        color: #999;
        
        span {
            color: #444;
            padding-left: 1em;
        }
    }
}

.help-text {
    margin: 2em;
}
</style>