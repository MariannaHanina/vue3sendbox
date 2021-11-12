<template>
  <div class="dsn-layout-default min-h-screen">
    <dsn-header />
    <div
      class="dsn-layout-default grid"
      :class="$style.grid"
    >
      <dsn-left-nav class="w-52" />
      <main class="pb-16 pt-8 px-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DsnHeader from '@/layouts/components/DsnHeader/DsnHeader.vue';
import DsnLeftNav from '@/layouts/components/DsnLeftNav/DsnLeftNav.vue';

export default defineComponent({
  name: 'DsnLayoutDefault',
  components: {
    DsnHeader,
    DsnLeftNav,
  },
});
</script>

<style module>
.grid {
  grid-template-columns: 13rem auto;
}
</style>
