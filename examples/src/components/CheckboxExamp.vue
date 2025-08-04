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
  <!-- ue-checkbox-group的v-model用于收集所有选中的checkbox的值 -->
  <!-- <ue-checkbox-group
    size="lg"
    v-model="valueGroup"
    @change="handleChangeboxGroup">
    <ue-checkbox value="chifan">吃饭</ue-checkbox>
    <ue-checkbox value="shuijiao">睡觉</ue-checkbox>
  </ue-checkbox-group> -->
  <!-- NOTE: checkboxModel.value的值与<ue-checkbox></ue-checkbox>的v-model的值同步 -->
  <!-- <ue-checkbox v-model="value">打篮球</ue-checkbox>
  <hr /> -->
  <!-- <ue-checkbox v-model="valueChecked" @change="handleChangebox">打篮球</ue-checkbox> -->
  <ue-checkbox :before-change="asyncChange">thrift</ue-checkbox>
  <hr />
  <!-- <ue-checkbox-all >
    <ue-checkbox value="hz">杭州</ue-checkbox>
    <ue-checkbox value="sh">上海</ue-checkbox>
    <ue-checkbox value="bj">北京</ue-checkbox>
  </ue-checkbox-all> -->
</template>

<script setup>
import { ref } from "vue"

const valueGroup = ref(["shuijiao"])
const value = "dalanqiu"

const valueChecked = ref(false)

const handleChangeboxGroup = (value, e) => {
  // console.log("changeboxGroup", value, e)
}
const handleChangebox = (value, e) => {
  // console.log("changebox:", value, e)
}

const asyncChange = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}
</script>
