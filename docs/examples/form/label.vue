<template>
  <ue-form :model="form">
    <ue-form-item name="field1" label="左对齐" :lableWidth="80" align="left">
      <ue-input v-model="form.field1" />
    </ue-form-item>
    <ue-form-item name="field2" label="居中" :lableWidth="120" align="center">
      <ue-input v-model="form.field2" />
    </ue-form-item>
    <ue-form-item name="field3" label="右对齐" :lableWidth="140" align="right" :colon="false">
      <ue-input v-model="form.field3" />
    </ue-form-item>
  </ue-form>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ field1: '', field2: '', field3: '' })
</script>

