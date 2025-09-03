<template>
  <ue-form ref="formRef" :model="formData" :rules="formRules" size="sm">
    <ue-form-item label="用户名" name="username" required>
      <ue-input v-model="formData.username"></ue-input>
    </ue-form-item>
    <ue-form-item label="密码" name="password">
      <ue-input v-model="formData.password"></ue-input>
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="submit">提交</ue-button>
      <ue-button @click="reset">重置</ue-button>
    </ue-form-item>
  </ue-form>
  <hr />
  <ue-form ref="formRef" :model="formData" :rules="formRules" size="md">
    <ue-form-item label="用户名" name="username" required>
      <ue-input v-model="formData.username"></ue-input>
    </ue-form-item>
    <ue-form-item label="密码" name="password">
      <ue-input v-model="formData.password"></ue-input>
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="submit">提交</ue-button>
      <ue-button @click="reset">重置</ue-button>
    </ue-form-item>
  </ue-form>
  <hr />
  <ue-form ref="formRef" :model="formData" :rules="formRules" size="lg">
    <ue-form-item label="用户名" name="username" required>
      <ue-input v-model="formData.username"></ue-input>
    </ue-form-item>
    <ue-form-item label="密码" name="password">
      <ue-input v-model="formData.password"></ue-input>
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="submit">提交</ue-button>
      <ue-button @click="reset">重置</ue-button>
    </ue-form-item>
  </ue-form>
  <hr />
  <ue-form ref="formRef" :model="formData" :rules="formRules" size="xl">
    <ue-form-item label="用户名" name="username" required>
      <ue-input v-model="formData.username"></ue-input>
    </ue-form-item>
    <ue-form-item label="密码" name="password">
      <ue-input v-model="formData.password"></ue-input>
    </ue-form-item>
    <ue-form-item>
      <ue-button type="primary" @click="submit">提交</ue-button>
      <ue-button @click="reset">重置</ue-button>
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { reactive, ref } from "vue"
const formRef = ref(null)
const formData = reactive({
  username: "huahua",
  password: "77777777",
  phone: "19876543210",
})
const formRules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 2,
      max: 8,
      message: "用户名的长度需大于2位小于8位",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 6,
      max: 12,
      message: "密码的长度需大于6位小于12位",
      trigger: "change",
    },
  ],
}
const submit = () => {
  formRef.value
    .validate()
    .then(v => {
      console.log("验证通过", v)
    })
    .catch(error => {
      console.log("验证失败", error)
    })
}
const reset = () => {
  formRef.value.reset()
}
</script>
