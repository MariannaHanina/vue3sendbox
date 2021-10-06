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
import { defineComponent, onMounted, inject, ref } from 'vue';
import OverviewBrokers from '../modules/brokers/components/OverviewBrokers.vue'
import OverviewTopics from '../modules/topics/components/OverviewTopics.vue'

import { TBroker } from '@/modules/brokers/types';
import { TTopic } from '@/modules/topics/types';
import ApiHttpSingleton from '@/utils/http';

export default defineComponent({
  components: {
    OverviewTopics,
    OverviewBrokers,
  },
  setup () {
    const http: ApiHttpSingleton = inject('http', ApiHttpSingleton.getInstance()); // inject apiClient
    const brokers = ref<TBroker[]>([]);
    const topics = ref<TTopic[]>([]);

    onMounted(async () => {
      const resultTopics: TTopic[] = await http.get<TTopic[]>('/topics');
      topics.value = resultTopics

      const resultBrokers: TBroker[] = await http.get<TBroker[]>('/brokers');
      brokers.value = resultBrokers
    });

    return {
      brokers,
      topics,
    };
  },
});
</script>
