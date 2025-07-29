<template>
  <ue-row>
    <ue-col :span="6">
      <div class="bg bg-odd"></div>
    </ue-col>
    <ue-col :span="6">
      <div class="bg bg-even"></div>
    </ue-col>
    <ue-col :span="6">
      <div class="bg bg-odd"></div>
    </ue-col>
    <ue-col :span="6">
      <div class="bg bg-even"></div>
    </ue-col>
  </ue-row>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 32px;
}
.bg-odd {
  background-color: #d3dce6;
}
.bg-even {
  background-color: #e5e9f2;
}
</style>
