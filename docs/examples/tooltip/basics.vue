<template>
  <div
    style="
      display: grid;
      gap: 12px;
      grid-auto-flow: column;
      align-items: center;
    ">
    <ue-tooltip content="这是一段提示">
      <ue-button>Hover 显示</ue-button>
    </ue-tooltip>

    <ue-tooltip theme="light" content="浅色主题">
      <ue-button>浅色主题</ue-button>
    </ue-tooltip>
  </div>
</template>

<script setup></script>
