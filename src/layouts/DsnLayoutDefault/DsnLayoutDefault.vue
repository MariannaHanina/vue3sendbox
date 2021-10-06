<template>
  <div class="dsn-layout-default">
    <el-header class="bg-blue-100 grid grid-cols-2">
      <top-nav />
      <div class="flex items-center justify-end">
        <logout-button />
      </div>
    </el-header>
    <div class="py-16">
      <slot />
    </div>
    <errors-drawer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopNav from './components/TopNav/TopNav.vue';
import LogoutButton from './components/LogoutButton.vue';
import ErrorsDrawer from '@/modules/errors/components/ErrorsDrawer.vue';

export default defineComponent({
  name: 'DsnLayoutDefault',
  components: {
    TopNav,
    LogoutButton,
    ErrorsDrawer,
  },
});

</script>
