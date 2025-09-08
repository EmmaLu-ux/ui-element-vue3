<template>
  <ue-modal
    v-model="show"
    title="修改用户"
    :cancel-button-show="true"
    :confirm-loading="loading"
    @cancel="handleCancel"
    @ok="handleOK">
    123的方式给对方123的方式给对方123的方式给对方123的方式给对方123的方式给对方
  </ue-modal>
  <ue-button @click="show = true">打开</ue-button>
  <hr />
  <ue-modal v-model="show1" title="修改账号">
    123的方式给对方123的方式给对方123的方式给对方123的方式给对方123的方式给对方
    <template #footer>
      <ue-button type="success">自定义取消按钮</ue-button>
      <ue-button type="primary">自定义确认按钮</ue-button>
    </template>
  </ue-modal>
  <ue-button @click="show1 = true">打开</ue-button>
  <hr />
  <ue-modal
    v-model="show3"
    title="系统配置"
    width="800"
    :before-change="handleBeforeChange"
    @ok="handleOK3"
    @close="handleCancel">
    123的方式给对方123的方式给对方123的方式给对方123的方式给对方123的方式给对方
  </ue-modal>
  <ue-button @click="show3 = true">打开</ue-button>
</template>

<script setup>
import { ref } from "vue"

const show = ref(false)
const show1 = ref(false)
const show3 = ref(false)
const loading = ref(false)

const handleCancel = () => {
  console.log("handleCancel")
}
const handleOK = () => {
  console.log("handleOK")
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
/**
 * NOTE: beforeChange 通常用于执行在 Modal 框中进行操作之前的其他动作，使确定按钮自动处于加载状态。当满足所执行的动作后，确定按钮的加载状态会自动关闭，从而减少用户手动设置 confirmLoading 属性的动作
 */
const handleBeforeChange = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log(
        "点击“确认按钮”之后先需要做的事情，做完这个事情之后，会做其他事情，如提交表单等"
      )
    }, 3000)
  })
}
const handleOK3 = () => {
  console.log("handleOK3")
}
</script>
