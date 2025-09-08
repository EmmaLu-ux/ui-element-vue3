<template>
  <ue-form :model="form" :rules="rules">
    <ue-row :gutter="16">
      <ue-col :span="8">
        <ue-form-item name="kw" label="关键词" :lableWidth="80">
          <ue-input v-model="form.kw" placeholder="关键字" />
        </ue-form-item>
      </ue-col>
      <ue-col :span="8">
        <ue-form-item name="owner" label="负责人" :lableWidth="80">
          <ue-input v-model="form.owner" placeholder="负责人" />
        </ue-form-item>
      </ue-col>
      <ue-col :span="8">
        <ue-form-item>
          <ue-button type="primary">查询</ue-button>
          <ue-button style="margin-left: 8px">重置</ue-button>
        </ue-form-item>
      </ue-col>
    </ue-row>
  </ue-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({ kw: '', owner: '' })
const rules = {
  kw: [{ required: true, message: '请输入关键字', trigger: 'blur' }],
  owner: [{ required: true, message: '请输入负责人', trigger: 'blur' }]
}
</script>

