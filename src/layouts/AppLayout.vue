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
      try {
        const layoutComponent = await import(`@/layouts/${layoutName}.vue`);
        return layoutComponent.default;
      } catch (e) {
        throw new Error(`There's no layout width name ${layoutName}`);
      }
    }

    watch(
      () => route.meta,
      async meta => {
        try {
          const layoutName = meta.layout as string;
          const layoutComponent = await getLayout(layoutName);

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
