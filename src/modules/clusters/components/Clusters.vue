<template>
  <div class="grid grid-cols-5 gap-4">
    <cluster-card
      v-for="cluster in clusters"
      :key="cluster.id"
      :cluster="cluster"
      class="max-w-max"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClusterCard from '@/modules/clusters/components/ClusterCard.vue';

export default defineComponent({
  name: 'Clusters',
  components: {
    ClusterCard,
  },
  props: {
    clusters: {
      type: Array,
      required: true,
    },
  },
});
</script>
