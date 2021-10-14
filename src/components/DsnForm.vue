<template>
  <el-form ref="form">
    <slot />
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DsnForm',
  setup () {
    const form = ref();

    return {
      form,
    };
  },
});
</script>
