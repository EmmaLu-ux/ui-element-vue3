<template>
  <div style="display: grid; gap: 12px">
    <ue-form :model="form" size="sm">
      <ue-form-item name="a" label="SM">
        <ue-input v-model="form.a" placeholder="sm" />
      </ue-form-item>
    </ue-form>
    <ue-form :model="form" size="md">
      <ue-form-item name="b" label="MD">
        <ue-input v-model="form.b" placeholder="md" />
      </ue-form-item>
    </ue-form>
    <ue-form :model="form" size="lg">
      <ue-form-item name="c" label="LG">
        <ue-input v-model="form.c" placeholder="lg" />
      </ue-form-item>
    </ue-form>
    <ue-form :model="form" size="xl">
      <ue-form-item name="d" label="XL">
        <ue-input v-model="form.d" placeholder="xl" />
      </ue-form-item>
    </ue-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ a: '', b: '', c: '', d: '' })
</script>

