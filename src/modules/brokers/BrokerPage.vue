<template>
  <dsn-heading-2>
    Broker:
  </dsn-heading-2>
</template>
<script lang="ts">
import { defineComponent, onMounted, inject, reactive } from 'vue';

import { TBroker } from './types';
import ApiHttpSingleton from '@/utils/http';

export default defineComponent({
  props: {
    id: { type: String, required: true },
  },
  setup (props) {
    const http: ApiHttpSingleton = inject('http', ApiHttpSingleton.getInstance()); // inject apiClient
    const data = reactive({
      broker: {
        id: -1,
        host: '',
        port: '',
        rack: '',
        controller: '',
        partitions: '',
      },
    });

    onMounted(async () => {
      const resultBroker: TBroker = await http.get<TBroker>('/brokers/' + props.id);
      data.broker = resultBroker;
    });

    return {
      data,
    };
  },

});

</script>
<style >

.local-border {
  @apply border-b border-r;
}
</style>
