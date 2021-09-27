<template>
  <el-table-column>
    <template #header>
      <slot name="header">
        {{ label }}
      </slot>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: { type: String, default: '' },
  },
});
</script>
