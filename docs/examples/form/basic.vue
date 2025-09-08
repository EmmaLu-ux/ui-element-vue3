<template>
  <ue-form ref="formRef" :model="form" :rules="rules">
    <ue-form-item name="username" label="用户名">
      <ue-input v-model="form.username" placeholder="请输入用户名" />
    </ue-form-item>
    <ue-form-item name="password" label="密码">
      <ue-input v-model="form.password" placeholder="请输入密码" type="password" />
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="onSubmit">提交</ue-button>
      <ue-button style="margin-left: 8px" @click="onReset">重置</ue-button>
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const form = reactive({ username: '', password: '' })
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度 3-12 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '至少 6 位', trigger: 'blur' }
  ]
}

const onSubmit = () => {
  formRef.value.validate().then(() => {
    console.log('校验通过', JSON.stringify(form))
  }).catch((errs) => {
    console.log('校验失败', errs)
  })
}
const onReset = () => formRef.value.reset()
</script>

