<template>
  <dsn-row :gutter="20">
    <dsn-col
      v-for="cluster in clusters"
      :key="cluster.id"
      :span="6"
    >
      <cluster-card
        :cluster="cluster"
        class="max-w-max"
      />
    </dsn-col>
  </dsn-row>
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
