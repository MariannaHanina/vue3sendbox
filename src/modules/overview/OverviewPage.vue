<template>
  <dsn-heading-2 class="text-left pl-3">
    Brokers
  </dsn-heading-2>
  <overview-brokers />
  <dsn-heading-2 class="text-left pl-3">
    Topics
  </dsn-heading-2>
  <overview-topics />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OverviewBrokers from './components/OverviewBrokers.vue'
import OverviewTopics from './components/OverviewTopics.vue'

export default defineComponent({
  components: {
    OverviewTopics, OverviewBrokers,
  },
});
</script>
