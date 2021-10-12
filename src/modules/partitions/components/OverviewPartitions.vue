<template>
  <dsn-table :data="dataTable">
    <dsn-column
      prop="id"
      label="ID"
      width="100"
    />
    <dsn-column
      prop="firstOffset"
      label="First Offset"
    />
    <dsn-column
      prop="lastOffset"
      label="Last Offset"
    />
    <dsn-column
      prop="size"
      label="Size"
    />
    <dsn-column
      prop="leaderNode"
      label="Leader Node"
    />
    <dsn-column
      prop="replicaNodes"
      label="Replica Nodes"
    />
    <dsn-column
      prop="syncReplicaNodes"
      label="In-sync Replica Nodes"
    />
    <dsn-column
      prop="offlineReplicaNodes"
      label="Offline Replica Nodes"
    />
    <dsn-column
      prop="preferred"
      label="Preferred"
    />
    <dsn-column
      prop="replicated"
      label="Under-replicated"
    />
  </dsn-table>
</template>

<script lang="ts">
import { TPartition } from '@/modules/partitions/types';
import { defineComponent, ref, PropType, toRefs, watchEffect } from 'vue';

export default defineComponent({
  name: 'OverviewTopics',
  props: {
    partitions: {
      type: Array as PropType<TPartition[]>,
      required: true,
    },
  },
  setup (props) {
    const dataTable = ref<TPartition[]>([]);

    const { partitions } = toRefs(props);
    watchEffect(() => {
      dataTable.value = partitions.value;
    });

    return {
      dataTable,
    };
  },
});
</script>
