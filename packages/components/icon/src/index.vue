<template>
    <i :class="[ns.b()]">
        <slot></slot>
    </i>
</template>

<script setup>
import { useNamespace } from "@ui-element-vue3/hooks"

const ns = useNamespace('icon')
defineOptions({
    name: 'ue-icon'
})

const props = defineProps({

})
</script>

<style lang="scss" scoped></style>