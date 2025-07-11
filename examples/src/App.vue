<script setup>
import { UeButton } from "../../packages"

const beforeChange = () => {
  console.log(1234)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
    // reject()
  })
}
</script>

<template>
  <ue-button
    size="sm"
    type="primary"
    :before-change="beforeChange"
    @click="beforeChange"
    >我是一个按钮</ue-button
  >
  <!-- NOTE: 此处的@click默认会走原生button的点击事件，导致beforeChange会被调用两次。
       应对: 定义一个自定义的click事件。在components/button/src/index.vue新增: const emits = defineEmits(["click"])，emits("click", e)
    -->
  <ue-button size="sm">我是一个按钮</ue-button>
  <ue-button size="sm" type="light">我是一个按钮</ue-button>
  <ue-button size="sm" type="outline">我是一个按钮</ue-button>
  <ue-button size="sm" type="dashed">我是一个按钮</ue-button>
  <ue-button size="sm" type="subtle">我是一个按钮</ue-button>
  <ue-button size="sm" type="link">我是一个按钮</ue-button>
  <hr />
  <ue-button size="md" type="primary" round>我是一个按钮</ue-button>
  <ue-button size="md" round>我是一个按钮</ue-button>
  <ue-button size="md" type="light" round>我是一个按钮</ue-button>
  <ue-button size="md" type="outline" round>我是一个按钮</ue-button>
  <ue-button size="md" type="dashed" round>我是一个按钮</ue-button>
  <ue-button size="md" type="subtle">我是一个按钮</ue-button>
  <ue-button size="md" type="link">我是一个按钮</ue-button>
  <hr />
  <ue-button type="primary" disabled>我是一个按钮</ue-button>
  <ue-button disabled>我是一个按钮</ue-button>
  <ue-button type="light" disabled>我是一个按钮</ue-button>
  <ue-button type="outline" disabled>我是一个按钮</ue-button>
  <ue-button type="dashed" disabled>我是一个按钮</ue-button>
  <ue-button type="subtle" disabled>我是一个按钮</ue-button>
  <ue-button type="link" disabled>我是一个按钮</ue-button>
  <hr />
  <ue-button size="lg" type="primary" block>我是一个按钮</ue-button>
  <ue-button size="lg" block>我是一个按钮</ue-button>
  <ue-button size="lg" type="light" block>我是一个按钮</ue-button>
  <ue-button size="lg" type="outline" block>我是一个按钮</ue-button>
  <ue-button size="lg" type="dashed" block>我是一个按钮</ue-button>
  <ue-button size="lg" type="subtle" block>我是一个按钮</ue-button>
  <ue-button size="lg" type="link" block>我是一个按钮</ue-button>
  <hr />
  <ue-button size="xl" type="primary" suxfix="icon-Forward"
    >我是一个按钮</ue-button
  >
  <ue-button size="xl">我是一个按钮</ue-button>
  <ue-button size="xl" type="light" loading prefix="icon-Forward"
    >我是一个按钮</ue-button
  >
  <ue-button size="xl" type="outline">我是一个按钮</ue-button>
  <ue-button size="xl" type="dashed">我是一个按钮</ue-button>
  <ue-button size="xl" type="subtle">我是一个按钮</ue-button>
  <ue-button size="xl" type="link">我是一个按钮</ue-button>
  <hr />
  <ue-button size="sm" type="primary" circle prefix="icon-Forward"></ue-button>
  <ue-button size="md" circle prefix="icon-Forward"></ue-button>
  <ue-button type="light" circle prefix="icon-Forward"></ue-button>
  <ue-button size="lg" type="outline" circle prefix="icon-Forward"></ue-button>
  <ue-button size="xl" type="dashed" circle prefix="icon-Forward"></ue-button>
</template>

<style scoped></style>
