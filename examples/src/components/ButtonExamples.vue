<template>
  <ue-button type="primary">Default Button</ue-button>
  <ue-button type="success">Default Button</ue-button>
  <ue-button type="warning">Default Button</ue-button>
  <ue-button type="error">Default Button</ue-button>
  <hr />
  <ue-button type="primary" round>Default Button</ue-button>
  <ue-button type="success" round>Default Button</ue-button>
  <ue-button type="warning" round>Default Button</ue-button>
  <ue-button type="error" round>Default Button</ue-button>
  <hr />
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
  <ue-button type="primary" size="md" circle disabled>Default Button</ue-button>
  <ue-button type="success" size="lg" circle disabled>Default Button</ue-button>
  <ue-button type="warning" size="xl" circle disabled>Default Button</ue-button>
  <ue-button type="error" size="sm" circle disabled>Default Button</ue-button>
  <hr />
  <ue-button circle prefix="icon-loading">Default Button</ue-button>
  <ue-button
    type="primary"
    size="md"
    circle
    prefix="icon-loading"
    suffix="icon-loading"
    >Default Button</ue-button
  >
  <ue-button
    type="success"
    size="lg"
    prefix="icon-loading"
    suffix="icon-loading"
    >Default Button</ue-button
  >
  <ue-button
    type="warning"
    size="xl"
    circle
    prefix="icon-loading"
    :before-change="beforeChange"
    >Default Button</ue-button
  >
  <ue-button type="error" size="sm" circle prefix="icon-loading"
    >Default Button</ue-button
  >
</template>

<script setup>
import { UeButton } from "../../../packages"

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
