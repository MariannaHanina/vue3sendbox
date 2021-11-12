<template>
  <dsn-nav
    :items="navItems"
    :active-index="activeIndex"
    active-text-color="rgb(16, 185, 129)"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'TopNav',
  setup () {
    const route = useRoute();
    const routes = useRouter().getRoutes();

    const filterRoutes = (route: RouteRecordRaw) => route.meta?.inNav;
    const formatRoute = ({ name, path }: RouteRecordRaw) => ({ name, path });

    const routesForNav = routes.filter(filterRoutes);
    const navItems = computed(() => routesForNav.map(formatRoute));

    const activeIndex = computed(() => route.path);

    return {
      navItems,
      activeIndex,
    };
  },
});

</script>
