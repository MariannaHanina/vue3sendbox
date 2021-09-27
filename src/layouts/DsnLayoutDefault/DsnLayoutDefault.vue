<template>
  <div class="dsn-layout-default">
    <top-nav />
    <div class="py-16">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopNav from './components/TopNav/TopNav.vue';

export default defineComponent({
  name: 'DsnLayoutDefault',
  components: {
    TopNav,
  },
});

</script>
