<template>
  <div style="display:flex; gap: 12px; align-items: center;">
    <ue-tooltip
      placement="bottom"
      :popperOptions="{ modifiers: [{ name: 'offset', options: { offset: [0, 24] } }] }"
      content="向下偏移 24px">
      <ue-button>自定义 offset</ue-button>
    </ue-tooltip>
  </div>
</template>

<script setup>
</script>

