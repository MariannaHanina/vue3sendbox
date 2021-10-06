<template>
  <dsn-heading-2>
    Topic: {{ data.topic.name }}
  </dsn-heading-2>
  <dsn-row
    class="pt-5"
  >
    <dsn-col
      :span="10"
      :offset="2"
      class="border border-black"
    >
      <span># of partitions</span>
    </dsn-col>
    <dsn-col
      :span="10"
      class="border-b border-r border-t border-black"
    >
      <span>{{ data.topic.partitions }}</span>
    </dsn-col>
  </dsn-row>
  <dsn-row>
    <dsn-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Preferred replicas</span>
    </dsn-col>
    <dsn-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.preferred }}</span>
    </dsn-col>
  </dsn-row>
  <dsn-row>
    <dsn-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Under-replicated partitions</span>
    </dsn-col>
    <dsn-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.replicated }}</span>
    </dsn-col>
  </dsn-row>
  <dsn-row>
    <dsn-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Total size</span>
    </dsn-col>
    <dsn-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.size }}</span>
    </dsn-col>
  </dsn-row>
  <dsn-row>
    <dsn-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Total available messages</span>
    </dsn-col>
    <dsn-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.messages }}</span>
    </dsn-col>
  </dsn-row>
</template>
<script lang="ts">
import { defineComponent, onMounted, inject, reactive } from 'vue';

import { TTopic } from './types'
import ApiHttpSingleton from '@/utils/http'

export default defineComponent({
  props: {
    id: { type: String, required: true },
  },
  setup (props) {
    const http: ApiHttpSingleton = inject('http', ApiHttpSingleton.getInstance()); // inject apiClient
    const data = reactive({
      topic: {
        id: '',
        name: '',
        partitions: 0,
        preferred: 0,
        replicated: 0,
        config: false,
        size: 0,
        messages: 0,
      },
    });

    onMounted(async () => {
      const resultTopics: TTopic = await http.get<TTopic>('/topics/' + props.id);
      data.topic = resultTopics
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
