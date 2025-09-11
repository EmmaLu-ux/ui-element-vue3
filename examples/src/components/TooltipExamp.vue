<template>
  <ue-tooltip content="909090" placement="top">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="88888" placement="bottom">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="dddddd" placement="left">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="right">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="right" trigger="click">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <hr />

  <ue-tooltip content="这是我" placement="top-start" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="top-end" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="bottom-start" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="bottom-end" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <hr />

  <ue-tooltip content="这是我" placement="right-start" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="right-end" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="left-start" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip content="这是我" placement="left-end" trigger="hover">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <hr />

  <ue-tooltip
    content="这是我"
    placement="right-start"
    trigger="hover"
    bgColor="red"
    textColor="white">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <ue-tooltip
    content="这是我"
    placement="right-start"
    trigger="hover"
    bgColor="#2db7f5"
    textColor="#fff">
    <ue-button>button</ue-button>
  </ue-tooltip>

  <hr />

  <ue-tooltip content="prompt text" trigger="click">
    Tooltip will show when mouse enter.
  </ue-tooltip>
</template>

<script setup></script>
