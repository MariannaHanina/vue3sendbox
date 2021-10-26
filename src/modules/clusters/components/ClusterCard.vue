<template>
  <el-card
    :body-style="{padding: 0}"
    class="relative overflow-visible"
  >
    <header
      :class="$style.header"
      @mouseover="showDetails"
      @mouseout="hideDetails"
    >
      <span>{{ cluster.name }}</span>
    </header>
    <main
      v-show="displayDetails"
      :class="$style.metrics"
    >
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
import { defineComponent, PropType, ref } from 'vue';
import { TClusterSummary } from '../types';

export default defineComponent({
  name: 'ClusterCard',
  props: {
    cluster: {
      type: Object as PropType<TClusterSummary>,
      required: true,
    },
  },
  setup () {
    const displayDetails = ref(false);
    const showDetails = () => {
      displayDetails.value = true;
    };
    const hideDetails = () => {
      displayDetails.value = false;
    };

    return {
      displayDetails,
      showDetails,
      hideDetails,
    };
  },
});
</script>

<style module>
.header {
  @apply bg-gray-800 text-white text-center p-6 h-24 flex items-center cursor-pointer rounded-t;
}
.metrics {
  @apply absolute top-24 z-10 bg-white shadow w-full;
}
.metric {
  @apply mb-1 whitespace-nowrap;
}
.metricValue {
  @apply font-bold whitespace-nowrap;
}
</style>
