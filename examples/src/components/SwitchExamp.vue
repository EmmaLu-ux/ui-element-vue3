<template>
  <ue-switch size="sm"></ue-switch>
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
  <ue-switch size="sm" onLabel="Open" offLabel="Close" disabled></ue-switch>
  <ue-switch size="md" onLabel="开启" offLabel="关闭" disabled></ue-switch>
  <ue-switch
    size="lg"
    :checked-icon="Eye"
    :unchecked-icon="EyeOff"
    disabled></ue-switch>
  <ue-switch
    size="xl"
    :checked-icon="Eye"
    :unchecked-icon="EyeOff"
    :center-icon="true"
    disabled></ue-switch>
  <hr />
  <ue-switch size="sm" disabled></ue-switch>
  <ue-switch size="md" disabled></ue-switch>
  <ue-switch size="lg" disabled></ue-switch>
  <ue-switch size="xl" disabled></ue-switch>
</template>

<script setup>
import { Eye, EyeOff } from "@ui-element-vue3/icons"
</script>
