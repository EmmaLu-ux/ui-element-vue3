<template>
  <ue-form :model="form" :rules="rules">
    <ue-form-item name="username" label="用户名">
      <ue-input v-model="form.username" placeholder="以字母开头，3-12 位，包含数字" />
    </ue-form-item>
    <ue-form-item name="async" label="异步校验">
      <ue-input v-model="form.async" placeholder="模拟异步校验（1s）" />
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ username: '', async: '' })

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      validator: (_rule, val) => {
        const ok = /^[a-zA-Z][a-zA-Z0-9]{2,11}$/.test(val)
        return ok ? Promise.resolve() : Promise.reject(new Error('以字母开头，3-12 位，且包含字母或数字'))
      },
      trigger: 'blur'
    }
  ],
  async: [
    {
      validator: (_rule, val) => new Promise((resolve, reject) => {
        setTimeout(() => {
          if (val && val.toLowerCase() !== 'blocked') resolve()
          else reject(new Error('值不可为 blocked（异步校验）'))
        }, 1000)
      }),
      trigger: 'change'
    }
  ]
}
</script>

