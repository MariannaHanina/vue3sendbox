<template>
  <dsn-layout-manager>
    <router-view />
  </dsn-layout-manager>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DsnLayoutManager from '@/layouts/DsnLayoutManager/DsnLayoutManager.vue';

export default defineComponent({
  name: 'App',
  components: {
    DsnLayoutManager,
  },
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  @apply text-black underline;
}
</style>
