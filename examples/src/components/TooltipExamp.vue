<template>
  <ue-tooltip content="这是我的提示内容" placement="top">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我的提示内容" placement="bottom">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我的提示内容" placement="left">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我的提示内容" placement="right">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <!-- 调试信息：展示实际的 placement -->
  <!-- 打开浏览器控制台，可在 hover 后运行：
       document.querySelector('.ue-tooltip__content')?.getAttribute('data-popper-placement')
  -->
</template>

<script setup></script>
