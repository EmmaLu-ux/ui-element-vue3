<template>
  <ue-input v-model="pwd" type="password" showPassword placeholder="输入密码" style="max-width: 360px" />
</template>

<script setup>
import { ref } from 'vue'
const pwd = ref('')
</script>

