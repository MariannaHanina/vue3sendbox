<template>
  <dsn-heading-2 class="text-left pl-3">
    Brokers
  </dsn-heading-2>
  <overview-brokers :brokers="brokers" />
  <dsn-heading-2 class="text-left pl-3">
    Topics
  </dsn-heading-2>
  <overview-topics :topics="topics" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OverviewBrokers from '../modules/brokers/components/OverviewBrokers.vue'
import OverviewTopics from '../modules/topics/components/OverviewTopics.vue'

import { getAllBrokers } from '@/modules/brokers/composables/getAllBrokers';
import { getAllTopics } from '@/modules/topics/composables/getAllTopics';

export default defineComponent({
  name: 'OverviewPage',
  components: {
    OverviewTopics,
    OverviewBrokers,
  },
  setup () {
    const { brokers } = getAllBrokers();
    const { topics } = getAllTopics();

    return {
      brokers,
      topics,
    };
  },
});
</script>
