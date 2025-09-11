<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
    <ue-tooltip theme="dark" content="深色主题">
      <ue-button>Dark</ue-button>
    </ue-tooltip>

    <ue-tooltip theme="light" content="浅色主题">
      <ue-button>Light</ue-button>
    </ue-tooltip>

    <ue-tooltip :bgColor="'#2db7f5'" :textColor="'#fff'" content="自定义颜色">
      <ue-button>自定义颜色</ue-button>
    </ue-tooltip>

    <ue-tooltip
      :bgColor="'rgba(0,0,0,.9)'"
      :textColor="'#ffe58f'"
      content="高对比度">
      <ue-button>高对比度</ue-button>
    </ue-tooltip>
  </div>
</template>
