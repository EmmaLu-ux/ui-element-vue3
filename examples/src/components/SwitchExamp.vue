<template>
  <!-- <ue-switch
    size="sm"
    v-model="check"
    :checked-value="true"
    :uncecked-value="false"></ue-switch>
  <ue-switch size="sm" type="primary"></ue-switch>
  <ue-switch size="sm" type="success"></ue-switch>
  <ue-switch size="sm" type="warning"></ue-switch>
  <ue-switch size="sm" type="error"></ue-switch>
  <hr />
  <ue-switch size="sm"></ue-switch>
  <ue-switch size="md"></ue-switch>
  <ue-switch size="lg"></ue-switch>
  <ue-switch size="xl"></ue-switch>
  <hr />
  <ue-switch size="sm" onLabel="On" offLabel="Off" disabled></ue-switch>
  <ue-switch size="md" onLabel="开启" offLabel="关闭" disabled></ue-switch>
  <ue-switch size="lg" :on-icon="Eye" :off-icon="EyeOff" disabled></ue-switch>
  <ue-switch
    size="xl"
    :on-icon="Eye"
    :off-icon="EyeOff"
    :center-icon="true"
    disabled></ue-switch>
  <hr />
  <ue-switch size="sm" disabled></ue-switch>
  <ue-switch size="md" type="success" disabled></ue-switch>
  <ue-switch size="lg" type="warning" disabled></ue-switch>
  <ue-switch size="xl" type="error" disabled></ue-switch> -->
  <hr />
  <ue-switch
    size="xl"
    type="primary"
    on-label="开"
    off-label="关"
    v-model="switchValue"
    :beforeChange="handleChange"></ue-switch>
  <ue-switch
    size="lg"
    type="primary"
    on-label="开"
    off-label="关"
    v-model="switchValue"
    :beforeChange="handleChange"></ue-switch>
  <ue-switch
    size="md"
    type="primary"
    on-label="开"
    off-label="关"
    v-model="switchValue"
    :beforeChange="handleChange"></ue-switch>
  <ue-switch
    type="warning"
    transition="slide"
    on-label="On"
    off-label="Off"
    v-model="switchValue1"
    :beforeChange="handleChange1"></ue-switch>
</template>

<script setup>
import { Eye, EyeOff } from "@ui-element-vue3/icons"
import { ref } from "vue"

const check = ref(false)

const switchValue = ref(true)
const switchValue1 = ref(true)
const handleChange = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), 2000)
  })
}
const handleChange1 = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), 2000)
  })
}
</script>
