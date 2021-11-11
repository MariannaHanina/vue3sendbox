<template>
  <el-header class="bg-gray-800 grid grid-cols-2 h-auto text-white">
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
      <user-link class="mr-4" />
      <logout-button />
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ObservabilityLink from './components/ObservabilityLink.vue';
import UserLink from './components/UserLink.vue';
import LogoutButton from './components/LogoutButton.vue';

export default defineComponent({
  name: 'DsnHeader',
  components: {
    LogoutButton,
    UserLink,
    ObservabilityLink,
  },
});

</script>
