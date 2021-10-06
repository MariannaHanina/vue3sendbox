<template>
  <el-menu
    :mode="mode"
    :router="true"
    :default-active="activeIndex"
  >
    <el-menu-item
      v-for="item in items"
      :key="item.name"
      :index="item.path"
    >
      {{ item.name }}
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export type TNavItem = {
  name: string;
  path: string;
}

export default defineComponent({
  name: 'DsnNav',
  props: {
    items: {
      type: Array as PropType<TNavItem[]>,
      required: true,
    },
    activeIndex: {
      type: String,
      default: '/',
    },
    mode: {
      type: String,
      default: 'vertical',
    },
  },
});

</script>
