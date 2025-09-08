<template>
  <ue-form ref="formRef" :model="form" :rules="rules">
    <ue-form-item name="email" label="邮箱">
      <ue-input v-model="form.email" placeholder="请输入邮箱" />
    </ue-form-item>
    <ue-form-item name="code" label="验证码">
      <ue-input v-model="form.code" placeholder="6 位数字" />
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="validateAll">校验全部</ue-button>
      <ue-button style="margin-left: 8px" @click="validateEmail">仅校验邮箱</ue-button>
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref()
const form = reactive({ email: '', code: '' })
const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '请输入 6 位数字', trigger: 'blur' }
  ]
}

const validateAll = () => {
  formRef.value.validate().then(() => {
    console.log('全部字段校验通过')
  }).catch(errs => console.log('校验失败', errs))
}
const validateEmail = () => {
  formRef.value.validate(['email']).then(() => {
    console.log('仅邮箱校验通过')
  }).catch(errs => console.log('邮箱不通过', errs))
}
</script>

