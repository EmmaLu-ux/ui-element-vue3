<template>
  <ue-tooltip placement="right">
    <ue-button>自定义内容</ue-button>
    <template #content>
      <div style="max-width: 200px;">
        <div style="font-weight: 600; margin-bottom: 4px;">提示标题</div>
        <div>支持多行文本与任意 HTML 内容，可用于更详细说明。</div>
      </div>
    </template>
  </ue-tooltip>
</template>

<script setup>
</script>

