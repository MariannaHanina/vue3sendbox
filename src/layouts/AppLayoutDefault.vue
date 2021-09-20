<template>
  <el-menu mode="horizontal" :router="true" :default-active="activeIndex">
    <el-menu-item index="/">
      Home
    </el-menu-item>
    <el-menu-item index="/about">
      About
    </el-menu-item>
    <el-menu-item index="/test">
      Test form
    </el-menu-item>
  </el-menu>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AppLayoutDefault',
  setup () {
    const route = useRoute();
    const activeIndex = computed(() => route.path);

    return {
      activeIndex,
    }
  },
});

</script>
