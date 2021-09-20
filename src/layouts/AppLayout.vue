<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';

export default defineComponent({
  name: 'AppLayout',
  setup () {
    const route = useRoute();
    const layout = ref();

    const getLayout = async (layoutName: string) => {
      const layoutComponent = await import(`@/layouts/${layoutName}.vue`);
      return layoutComponent.default;
    }

    watch(
      () => route.meta,
      async meta => {
        try {
          const layoutName = meta.layout as string;
          const layoutComponent = await getLayout(layoutName);

          if (!layoutComponent) {
            throw new Error(`Layout ${layoutName} doesn't exist!`);
          }

          layout.value = markRaw(layoutComponent);
        } catch (e) {
          layout.value = markRaw(AppLayoutDefault);
        }
      },
      {
        immediate: true,
      },
    );

    return {
      layout,
    }
  },
});
</script>
