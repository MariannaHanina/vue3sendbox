<template>
  <el-table
    stripe
    style="width: 100%"
    border
    :cell-class-name="cellClass"
  >
    <slot />
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    dense: {
      type: Boolean, default: false,
    },
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

<style >

td.td-dense {
  padding: 0 !important;
}
</style>
