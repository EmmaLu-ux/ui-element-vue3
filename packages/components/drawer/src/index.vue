<template>
  <teleport to="body">
    <transition
      :name="ns.b()"
      @enter="useEnter"
      @before-enter="useBeforeEnter"
      @after-enter="useAfterEnter"
      @before-leave="useBeforeLeave"
      @after-leave="useAfterLeave">
      <ue-mask v-show="visible" v-bind="$attrs" @close="useClose">
        <div
          :class="[
            ns.b(),
            ns.m('placement', placement),
            ns.is('fixed-screen', fixedScreen),
          ]"
          :style="[width]">
          <div :class="[ns.e('wrap')]">
            <!-- 头部 -->
            <div :class="[ns.e('header')]">
              <h4 :class="[ns.e('title')]">{{ title }}</h4>
              <ue-icon :class="[ns.e('close')]" @click="useClose">
                <Close />
              </ue-icon>
            </div>
            <!-- 内容区 -->
            <div :class="[ns.e('content')]">
              <div :class="[ns.e('render-content')]" v-if="rendered">
                <slot />
              </div>
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
  </teleport>
</template>

<script setup>
import { UeMask } from "@ui-element-vue3/components"
import { useNamespace } from "@ui-element-vue3/hooks"
import { Close } from "@ui-element-vue3/icons"
import { drawerProps } from "./drawer"
import { useDrawer } from "./composables/use-drawer"

defineOptions({ name: "ue-drawer" })
const ns = useNamespace("drawer")
const visible = defineModel() // NOTE:与父组件使用的v-model属性相呼应

const props = defineProps(drawerProps)
const emits = defineEmits(["cancel", "ok", "open", "opened", "close", "closed"])

const {
  useClose,
  useBeforeChange,
  useBeforeCancel,
  isLoading,
  useEnter,
  useBeforeEnter,
  useAfterEnter,
  useBeforeLeave,
  useAfterLeave,
  rendered,
  width,
} = useDrawer({
  props,
  visible,
})
</script>
