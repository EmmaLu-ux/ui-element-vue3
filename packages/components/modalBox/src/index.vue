<template>
  <transition :name="ns.b()">
    <ue-mask v-show="visible" v-bind="$attrs" @close="useClose">
      <div :class="[ns.b()]">
        <div :class="[ns.e('wrap')]">
          <div :class="[ns.e('header')]">
            <ue-icon :class="[ns.m(theme)]">
              <component :is="icon" />
            </ue-icon>
            <div :class="[ns.e('title')]">{{ title }}</div>
          </div>
          <!-- 内容区 -->
          <div :class="[ns.e('content')]">
            <template v-if="isStringContent">{{ content }}</template>
            <component v-if="isVNodeContent" :is="content" />
          </div>
          <!-- 底部footer -->
          <div :class="[ns.e('footer')]" v-if="footer">
            <template v-if="$slots.footer">
              <slot name="footer" />
            </template>
            <template v-else>
              <ue-button @click="useBeforeCancel" v-if="cancelButtonShow">{{
                cancelButtonText
              }}</ue-button>
              <ue-button
                type="primary"
                v-if="confirmButtonShow"
                @click="useBeforeChange"
                :loading="isLoading"
                >{{ confirmButtonText }}</ue-button
              >
            </template>
          </div>
        </div>
      </div>
    </ue-mask>
  </transition>
</template>

<script setup>
import { onMounted, computed, isVNode } from "vue"
import { UeMask } from "@ui-element-vue3/components"
import { useNamespace } from "@ui-element-vue3/hooks"
import { modalProps } from "./modal-box"
import { useModalBox } from "./composables/use-modal-box"
import { typeIcon, themeType, types } from "@ui-element-vue3/utils"

defineOptions({ name: "ue-modal-box" })
const ns = useNamespace("modal-box")
const visible = defineModel() // NOTE:与父组件使用的v-model属性相呼应

const props = defineProps(modalProps)
const emits = defineEmits(["cancel", "ok", "open", "opened", "close", "closed"])

const icon = computed(() => typeIcon[props.icon])
const theme = computed(() => themeType?.[props.icon] || props.icon)
const isStringContent = computed(() => types().isString(props.content))
const isVNodeContent = computed(() => isVNode(props.content))

const { useClose, useBeforeChange, useBeforeCancel, isLoading } = useModalBox({
  props,
  visible,
})

onMounted(() => {
  visible.value = true
})
</script>
