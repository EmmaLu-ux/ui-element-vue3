<template>
  <ue-form :model="form" :rules="rules">
    <ue-form-item name="email" label="邮箱">
      <ue-input v-model="form.email" placeholder="输入后 blur 触发" />
    </ue-form-item>
    <ue-form-item name="nickname" label="昵称">
      <ue-input v-model="form.nickname" placeholder="输入过程中 change 触发" />
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ email: '', nickname: '' })
const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ],
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'change' },
    { min: 2, max: 8, message: '2-8 个字符', trigger: 'change' }
  ]
}
</script>

