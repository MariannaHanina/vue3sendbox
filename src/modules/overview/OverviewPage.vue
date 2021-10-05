<template>
  <dsn-heading-2 class="text-left pl-3">
    Brokers
  </dsn-heading-2>
  <overview-brokers :brokers="brokers" />
  <dsn-heading-2 class="text-left pl-3">
    Topics
  </dsn-heading-2>
  <overview-topics :users="users" />
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, ref } from 'vue';
import OverviewBrokers from './components/OverviewBrokers.vue'
import OverviewTopics from './components/OverviewTopics.vue'

import { TBroker, TUser } from './types'
import ApiHttpSingleton from '@/utils/http'

export default defineComponent({
  components: {
    OverviewTopics,
    OverviewBrokers,
  },
  setup () {
    const http: ApiHttpSingleton = inject('http', ApiHttpSingleton.getInstance()); // inject apiClient
    const brokers = ref<TBroker[]>([]);
    const users = ref<TUser[]>([]);

    onMounted(async () => {
      const resultUsers: TUser[] = await http.get<TUser[]>('/users');
      users.value = resultUsers

      const resultBrokers: TBroker[] = await http.get<TBroker[]>('/brokers');
      brokers.value = resultBrokers
    });

    return {
      brokers,
      users,
    };
  },
});
</script>
