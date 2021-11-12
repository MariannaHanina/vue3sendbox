<template>
  <dsn-descriptions
    direction="vertical"
    :column="5"
    border
    class="cluster-summary"
  >
    <el-descriptions-item label="Cluster name">
      {{ clusterName }}
    </el-descriptions-item>
    <el-descriptions-item label="Total topics">
      {{ clusterSummary.topicCount }}
    </el-descriptions-item>
    <el-descriptions-item label="Total partitions">
      {{ clusterSummary.partitionCount }}
    </el-descriptions-item>
    <el-descriptions-item
      label="Total preferred partition leader"
      :class-name="preferredReplicaClass"
    >
      {{ clusterSummary.preferredReplicaPercent }}%
    </el-descriptions-item>
    <el-descriptions-item
      label="Total under-replicated partitions"
      :class-name="underReplicatedClass"
    >
      {{ clusterSummary.underReplicatedCount }}
    </el-descriptions-item>
  </dsn-descriptions>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, PropType, useCssModule } from 'vue';
import { TClusterSummary } from '../types';

export default defineComponent({
  props: {
    clusterName: {
      type: String,
      required: true,
    },
    clusterSummary: {
      type: Object as PropType<TClusterSummary>,
      required: true,
    },
  },
  setup (props) {
    const style = useCssModule();
    const { clusterSummary } = toRefs(props);

    const preferredReplicaClass =
      computed(() => clusterSummary.value.preferredReplicaPercent < 1 ? style.warning : '');

    const underReplicatedClass =
      computed(() => clusterSummary.value.underReplicatedCount > 0 ? style.warning : '');

    return {
      preferredReplicaClass,
      underReplicatedClass,
    };
  },
});
</script>

<style module>
.warning {
  @apply text-red-600;
}
</style>
