<template>
  <ue-form :model="form" :rules="rules">
    <ue-form-item name="account" label="账号" :rules="[{ min: 4, message: '至少 4 位（局部追加）' }]">
      <ue-input v-model="form.account" placeholder="全局 + 局部规则合并" />
    </ue-form-item>
    <ue-form-item name="mobile" label="手机号" :rules="[{ pattern: /^1\d{10}$/, message: '本项覆盖格式校验' }]">
      <ue-input v-model="form.mobile" placeholder="局部自定义格式" />
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ account: '', mobile: '' })
const rules = {
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
  ]
}
</script>

