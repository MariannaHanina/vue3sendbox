<template>
  <article class="mt-10">
    <dsn-heading-1>Clusters</dsn-heading-1>
    <clusters
      :clusters="clusters"
      class="mt-10"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getClusters from '@/modules/clusters/composables/getClusters';
import Clusters from '@/modules/clusters/components/Clusters.vue';

export default defineComponent({
  name: 'ClustersOverview',
  components: {
    Clusters,
  },
  setup () {
    const clusters = getClusters();

    return {
      clusters,
    };
  },
});
</script>
