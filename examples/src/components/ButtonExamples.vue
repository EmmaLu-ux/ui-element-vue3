<template>
  <ue-button type="default">Default Button</ue-button>
  <ue-button type="primary">Default Button</ue-button>
  <ue-button type="success">Default Button</ue-button>
  <ue-button type="warning">Default Button</ue-button>
  <ue-button type="error">Default Button</ue-button>
  <hr />
  <ue-button type="default" round>Default Button</ue-button>
  <ue-button type="primary" round>Default Button</ue-button>
  <ue-button type="success" round>Default Button</ue-button>
  <ue-button type="warning" round>Default Button</ue-button>
  <ue-button type="error" round>Default Button</ue-button>
  <hr />
  <ue-button type="default" round disabled>Default Button</ue-button>
  <ue-button type="primary" disabled round>Default Button</ue-button>
  <ue-button type="success" disabled round>Default Button</ue-button>
  <ue-button type="warning" disabled round>Default Button</ue-button>
  <ue-button type="error" disabled round>Default Button</ue-button>
  <hr />
  <ue-button subtle>Default Button</ue-button>
  <ue-button type="primary" subtle>Default Button</ue-button>
  <ue-button type="success" subtle>Default Button</ue-button>
  <ue-button type="warning" subtle>Default Button</ue-button>
  <ue-button type="error" subtle>Default Button</ue-button>
  <hr />
  <ue-button link>Default Button</ue-button>
  <ue-button type="primary" link>Default Button</ue-button>
  <ue-button type="success" link>Default Button</ue-button>
  <ue-button type="warning" link>Default Button</ue-button>
  <ue-button type="error" link>Default Button</ue-button>
  <hr />
  <ue-button type="primary" block>Default Button</ue-button>
  <ue-button type="success" block>Default Button</ue-button>
  <ue-button type="warning" block>Default Button</ue-button>
  <ue-button type="error" block>Default Button</ue-button>
  <hr />
  outline
  <ue-button outline>Default Button</ue-button>
  <ue-button type="primary" outline>Default Button</ue-button>
  <ue-button type="success" outline>Default Button</ue-button>
  <ue-button type="warning" outline>Default Button</ue-button>
  <ue-button type="error" outline>Default Button</ue-button>
  <hr />
  <ue-button dashed>Default Button</ue-button>
  <ue-button type="primary" dashed>Default Button</ue-button>
  <ue-button type="success" dashed>Default Button</ue-button>
  <ue-button type="warning" dashed>Default Button</ue-button>
  <ue-button type="error" dashed>Default Button</ue-button>
  <hr />
  <ue-button>Default Button</ue-button>
  <ue-button type="primary" size="md">Default Button</ue-button>
  <ue-button type="success" size="lg">Default Button</ue-button>
  <ue-button type="warning" size="xl">Default Button</ue-button>
  <ue-button type="error" size="sm">Default Button</ue-button>
  <hr />
  <ue-button circle disabled>Default Button</ue-button>
  <ue-button type="primary" size="sm" circle disabled>Default Button</ue-button>
  <ue-button type="success" size="lg" circle disabled>Default Button</ue-button>
  <ue-button type="warning" size="xl" circle disabled>Default Button</ue-button>
  <ue-button type="error" size="sm" circle disabled>Default Button</ue-button>
  <hr />
  <ue-button circle prefix="icon-loading">Default Button</ue-button>
  <ue-button type="primary" size="sm" circle prefix="icon-loading" suffix="icon-loading">Default Button</ue-button>
  <ue-button type="success" size="md" prefix="icon-loading" suffix="icon-loading">Default Button</ue-button>
  <ue-button type="warning" size="lg" circle prefix="icon-loading" :before-change="beforeChange">Default
    Button</ue-button>
  <ue-button type="error" size="xl" circle prefix="icon-loading">Default Button</ue-button>
  <hr />
  <ue-button type="primary" size="lg">
    <ue-icon size="16" color="white">
      <Eye />
    </ue-icon>
    查看
    <ue-icon size="16" color="white">
      <Eye />
    </ue-icon>
  </ue-button>
  <hr />
  <!-- 不同大小的图标示例 -->
  <ue-button type="success" size="sm">
    <ue-icon size="14" color="white">
      <Eye />
    </ue-icon>
    小图标
  </ue-button>
  <ue-button type="warning" size="md">
    <ue-icon size="16" color="white">
      <Eye />
    </ue-icon>
    中图标
  </ue-button>
  <ue-button type="error" size="lg">
    <ue-icon size="18" color="white">
      <Eye />
    </ue-icon>
    大图标
  </ue-button>
</template>

<script setup>
// 按需引入
import { UeButton, UeIcon } from "flori-ui"
import { Eye } from "flori-ui/icons"

const beforeChange = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return resolve(true)
      return reject()
    }, 1000)
  })
}
</script>

<style lang="scss" scoped></style>
