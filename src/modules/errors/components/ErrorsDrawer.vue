<template>
  <dsn-button
    title="Show Errors"
    class="bottom-0 absolute"
    @click="openErrorDrawer"
  >
    <el-icon>
      <arrow-up-bold />
    </el-icon>
  </dsn-button>
  <el-drawer
    v-model="drawerIsShown"
    title="Error Panel"
    direction="btt"
  >
    <errors-panel />
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ErrorsPanel from './ErrorsPanel.vue';

export default defineComponent({
  components: {
    ErrorsPanel,
  },
  setup () {
    const drawerIsShown = ref(false);

    function openErrorDrawer () {
      drawerIsShown.value = true;
    }

    return {
      drawerIsShown,
      openErrorDrawer,
    };
  },
});
</script>
