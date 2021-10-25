<template>
  <el-card :body-style="{padding: 0}">
    <header :class="$style.header">
      <span>{{ cluster.name }}</span>
    </header>
    <main>
      <ul class="p-5 text-sm">
        <li :class="$style.metric">
          Total topics:
          <span :class="$style.metricValue">{{ cluster.topicCount }}</span>
        </li>
        <li :class="$style.metric">
          Total partitions:
          <span :class="$style.metricValue">{{ cluster.partitionCount }}</span>
        </li>
        <li :class="$style.metric">
          Total preferred partition leader:
          <span :class="$style.metricValue">{{ cluster.preferredReplicaPercent }}%</span>
        </li>
        <li :class="$style.metric">
          Total under-replicated partitions:
          <span :class="$style.metricValue">{{ cluster.underReplicatedCount }}</span>
        </li>
      </ul>
    </main>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TClusterSummary } from '../types';

export default defineComponent({
  name: 'ClusterCard',
  props: {
    cluster: {
      type: Object as PropType<TClusterSummary>,
      required: true,
    },
  },
});
</script>

<style module>
.header {
  @apply bg-gray-800 text-white text-center p-6 h-24 flex items-center;
}
.metric {
  @apply mb-1 whitespace-nowrap;
}
.metricValue {
  @apply font-bold whitespace-nowrap;
}
</style>
