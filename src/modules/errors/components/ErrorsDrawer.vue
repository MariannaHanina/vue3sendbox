<template>
  <dsn-button
    title="Show Errors"
    class="bottom-0 absolute left-2/4 w-14 -ml-7"
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
// todo: There's strange problem with DsnButton,
// when ErrorsDrawer is located in DsnLayoutManager.
// This component is not visible as global.
import DsnButton from '@/components/DsnButton/DsnButton.vue';

export default defineComponent({
  name: 'ErrorsDrawer',
  components: {
    ErrorsPanel,
    DsnButton,
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
