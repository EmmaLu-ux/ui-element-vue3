<template>
  <div>
    <ue-row :gap="12">
      <ue-col :span="8"><div class="demo-col">8</div></ue-col>
      <ue-col :span="8"><div class="demo-col alt">8</div></ue-col>
      <ue-col :span="8"><div class="demo-col">8</div></ue-col>
      <ue-col :span="12"><div class="demo-col alt">12</div></ue-col>
      <ue-col :span="12"><div class="demo-col">12</div></ue-col>
    </ue-row>
  </div>
</template>

<script setup>
// 无逻辑
</script>

<style scoped>
.demo-col {
  width: 100%;
  background: #eef5ff;
  border: 1px dashed #c0d4ff;
  color: #3366cc;
  text-align: center;
  padding: 10px 0;
}
.demo-col.alt {
  background: #f3f8ff;
  border-color: #d6e4ff;
  color: #2f66b3;
}
</style>
