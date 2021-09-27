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
    dense: {
      type: Boolean, default: false,
    },
    label: { type: String, default: '' },
  },
  setup (props) {
    const cellClass = () => {
      return props.dense ? 'td-dense' : '';
    }

    return {
      cellClass,
    }
  },
});
</script>
