<template>
  <!-- <ue-checkbox>打篮球</ue-checkbox>
  <hr />
  <ue-checkbox type="primary">打篮球</ue-checkbox>
  <ue-checkbox type="success">打篮球</ue-checkbox>
  <ue-checkbox type="error">打篮球</ue-checkbox>
  <ue-checkbox type="warning">打篮球</ue-checkbox>
  <ue-checkbox>打篮球</ue-checkbox>
  <hr />
  <ue-checkbox type="primary" disabled>打篮球</ue-checkbox>
  <ue-checkbox type="success" disabled>打篮球</ue-checkbox>
  <ue-checkbox type="error" disabled>打篮球</ue-checkbox>
  <ue-checkbox type="warning" disabled>打篮球</ue-checkbox>
  <ue-checkbox disabled>打篮球</ue-checkbox>
  <hr />
  <ue-checkbox size="sm">打篮球</ue-checkbox>
  <ue-checkbox size="md">打篮球</ue-checkbox>
  <ue-checkbox size="lg">打篮球</ue-checkbox>
  <ue-checkbox size="xl">打篮球</ue-checkbox>
  <hr /> -->
  <!-- // NOTE: checkboxGroupModel.value的值与<ue-checkbox-group></ue-checkbox-group>的v-model的值同步 -->
  <ue-checkbox-group size="lg" v-model="valueGroup">
    <ue-checkbox>吃饭</ue-checkbox>
    <ue-checkbox>睡觉</ue-checkbox>
  </ue-checkbox-group>
  <!-- NOTE: checkboxModel.value的值与<ue-checkbox></ue-checkbox>的v-model的值同步 -->
  <!-- <ue-checkbox v-model="value">打篮球</ue-checkbox>
  <hr /> -->
  <!-- <ue-checkbox v-model="valueChecked">打篮球</ue-checkbox> -->
</template>

<script setup>
import { ref } from "vue"

const valueGroup = ref(["chifan", "shuijiao"])
const value = "dalanqiu"

const valueChecked = ref(false)
</script>
