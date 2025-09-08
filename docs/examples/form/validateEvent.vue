<template>
  <ue-form ref="formRef" :model="form" :rules="rules">
    <ue-form-item name="desc" label="备注">
      <ue-input v-model="form.desc" :validateEvent="false" placeholder="仅提交时校验，不在输入/失焦时校验" />
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="onSubmit">提交校验</ue-button>
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref()
const form = reactive({ desc: '' })
const rules = {
  desc: [
    { required: true, message: '请输入备注', trigger: 'blur' },
    { min: 5, message: '至少 5 个字符', trigger: 'change' }
  ]
}

const onSubmit = () => {
  formRef.value.validate().then(() => {
    console.log('提交前校验通过')
  }).catch(errs => console.log('校验失败', errs))
}
</script>

