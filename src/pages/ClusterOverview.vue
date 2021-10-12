<template>
  <dsn-heading-1>Kafka Cluster Overview</dsn-heading-1>
  <div class="mt-5">
    Claster Overview
  </div>

  <div class="my-10">
    <dsn-heading-2>Brokers</dsn-heading-2>
    <overview-brokers
      :brokers="brokers"
      class="mt-5"
    />
  </div>

  <div class="my-10">
    <dsn-heading-2>Topics</dsn-heading-2>
    <overview-topics
      class="mt-5"
      :topics="topics"
    />
    <dsn-button class="mt-5">
      New
    </dsn-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OverviewBrokers from '../modules/brokers/components/OverviewBrokers.vue';
import OverviewTopics from '../modules/topics/components/OverviewTopics.vue';

import { getAllBrokers } from '@/modules/brokers/composables/getAllBrokers';
import { getAllTopics } from '@/modules/topics/composables/getAllTopics';

export default defineComponent({
  name: 'ClusterOverview',
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
