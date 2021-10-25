<template>
  <article class="mt-10">
    <dsn-heading-1>Clusters</dsn-heading-1>
    <clusters
      :clusters="clusters"
      class="mt-10"
    />
  </article>
  <article class="mt-10">
    <dsn-heading-2>Users</dsn-heading-2>
    Users List
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Clusters from '@/modules/clusters/components/Clusters.vue';

export default defineComponent({
  name: 'ClustersOverview',
  components: {
    Clusters,
  },
  setup () {
    const clusters = [{
      name: 'jarvis-nonprod-us-east-1-integration',
      topicCount: 502,
      partitionCount: 1907,
      preferredReplicaPercent: 100,
      underReplicatedCount: 0,
    }, {
      name: 'jarvis-nonprod-us-east-1-test1',
      topicCount: 344,
      partitionCount: 567,
      preferredReplicaPercent: 60,
      underReplicatedCount: 0,
    }];

    return {
      clusters,
    };
  },
});
</script>
