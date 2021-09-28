<template>
  <el-table-column v-bind="$attrs">
    <template #header>
      <slot name="header">
        {{ label }}
      </slot>
    </template>
    <template #default="{row}">
      <slot :row="row">
        {{ row[prop] }}
      </slot>
    </template>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: { type: String, default: '' },
    prop: { type: String, default: '' },
  },
});
</script>
