<template>
  <div class="dsn-layout-default">
    <dsn-header />
    <div class="pb-16 pt-4 px-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DsnHeader from '@/layouts/components/DsnHeader/DsnHeader.vue';

export default defineComponent({
  name: 'DsnLayoutMain',
  components: {
    DsnHeader,
  },
});
</script>
