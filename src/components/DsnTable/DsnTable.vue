<template>
  <el-table
    v-loading="loading"
    stripe
    style="width: 100%"
    border
    :cell-class-name="cellClass"
    :data="data"
  >
    <slot />
  </el-table>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import useLoading from '@/composables/useLoading';

export default defineComponent({
  props: {
    dense: {
      type: Boolean, default: false,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup (props) {
    const { data, dense } = toRefs(props);
    const { loading } = useLoading(data);

    const cellClass = () => {
      return dense.value ? 'no_padding' : '';
    };

    return {
      cellClass,
      loading,
    };
  },
});
</script>

<style >

td.no_padding {
  @apply p-0;
}
</style>
