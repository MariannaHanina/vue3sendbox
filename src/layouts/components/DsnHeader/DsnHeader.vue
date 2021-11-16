<template>
  <el-header class="app-header bg-gray-800 grid grid-cols-2 h-auto text-white">
    <div class="flex items-center">
      <img
        src="@/assets/baby-groot-alt.png"
        alt="BabyGroot"
        class="p-2 h-16 mr-2"
      >
      <header class="text-4xl">
        Baby Groot
      </header>
    </div>
    <div class="flex items-center justify-end text-sm">
      <observability-link class=" mr-8" />
      <user-menu />
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ObservabilityLink from './components/ObservabilityLink.vue';
import UserMenu from './components/UserMenu.vue';

export default defineComponent({
  name: 'DsnHeader',
  components: {
    UserMenu,
    ObservabilityLink,
  },
});

</script>

<style>
.app-header a{
  @apply text-white no-underline;
}

</style>
