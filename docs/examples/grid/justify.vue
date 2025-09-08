<template>
  <div style="display: grid; gap: 16px">
    <ue-row justify="start">
      <ue-col :span="4"><div class="demo-col">start</div></ue-col>
      <ue-col :span="4"><div class="demo-col alt">4</div></ue-col>
      <ue-col :span="4"><div class="demo-col">4</div></ue-col>
    </ue-row>

    <ue-row justify="center">
      <ue-col :span="4"><div class="demo-col">center</div></ue-col>
      <ue-col :span="4"><div class="demo-col alt">4</div></ue-col>
      <ue-col :span="4"><div class="demo-col">4</div></ue-col>
    </ue-row>

    <ue-row justify="end">
      <ue-col :span="4"><div class="demo-col">end</div></ue-col>
      <ue-col :span="4"><div class="demo-col alt">4</div></ue-col>
      <ue-col :span="4"><div class="demo-col">4</div></ue-col>
    </ue-row>

    <ue-row justify="space-between">
      <ue-col :span="4"><div class="demo-col">between</div></ue-col>
      <ue-col :span="4"><div class="demo-col alt">4</div></ue-col>
      <ue-col :span="4"><div class="demo-col">4</div></ue-col>
    </ue-row>

    <ue-row justify="space-around">
      <ue-col :span="4"><div class="demo-col">around</div></ue-col>
      <ue-col :span="4"><div class="demo-col alt">4</div></ue-col>
      <ue-col :span="4"><div class="demo-col">4</div></ue-col>
    </ue-row>

    <ue-row justify="evenly">
      <ue-col :span="4"><div class="demo-col">evenly</div></ue-col>
      <ue-col :span="4"><div class="demo-col alt">4</div></ue-col>
      <ue-col :span="4"><div class="demo-col">4</div></ue-col>
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
