<template >
  <el-button :type="type" :size="size" :plain="plain" :round="round" :circle="circle" :loading="loading" :disabled="disabled">
    <slot />
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: () => {
        return null;
      }
    },
    size: {
      type: String,
      default: () => {
        return null;
      }
    },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  }
});
</script>
