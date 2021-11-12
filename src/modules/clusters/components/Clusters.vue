<template>
  <div class="grid grid-cols-5 gap-4">
    <cluster-card
      v-for="cluster in clusters"
      :key="cluster.id"
      :cluster="cluster"
      class="max-w-max"
      @click="goToCluster(cluster.id)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
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
  setup () {
    const router = useRouter();
    const goToCluster = (id: string) => {
      router.push(`/cluster/${id}`);
    };

    return {
      goToCluster,
    };
  },
});
</script>
