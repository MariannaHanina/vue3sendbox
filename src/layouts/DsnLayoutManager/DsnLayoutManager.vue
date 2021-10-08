<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { isAuthenticated as isUserAuthenticated } from '@/modules/auth/utils';

export default defineComponent({
  name: 'DsnLayoutManager',
  setup () {
    const route = useRoute();
    const layout = ref();

    const getLayout = async (layoutName: string) => {
      try {
        const layoutComponent = await import(`@/layouts/${layoutName}/${layoutName}.vue`);
        return layoutComponent.default;
      } catch (e) {
        throw new Error(`There's no layout width name ${layoutName}`);
      }
    };

    watch(
      () => route.meta,
      async meta => {
        try {
          const layoutName = meta.layout as string;
          const layoutComponent = await getLayout(layoutName);

          layout.value = markRaw(layoutComponent);
        } catch (e) {
          const isAuthenticated = isUserAuthenticated();
          const defaultLayoutName = isAuthenticated ? 'DsnLayoutDefault' : 'DsnLayoutAuth';
          const defaultLayoutComponent = await getLayout(defaultLayoutName);

          layout.value = markRaw(defaultLayoutComponent);
        }
      },
      {
        immediate: true,
      },
    );

    return {
      layout,
    };
  },
});
</script>
