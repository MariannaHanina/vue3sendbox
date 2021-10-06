<template>
  <dsn-heading-2>
    Topic: {{ data.topic.name }}
  </dsn-heading-2>
  <el-row
    class="pt-5"
  >
    <el-col
      :span="10"
      :offset="2"
      class="border border-black"
    >
      <span># of partitions</span>
    </el-col>
    <el-col
      :span="10"
      class="border-b border-r border-t border-black"
    >
      <span>{{ data.topic.partitions }}</span>
    </el-col>
  </el-row>
  <el-row>
    <el-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Preferred replicas</span>
    </el-col>
    <el-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.preferred }}</span>
    </el-col>
  </el-row>
  <el-row>
    <el-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Under-replicated partitions</span>
    </el-col>
    <el-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.replicated }}</span>
    </el-col>
  </el-row>
  <el-row>
    <el-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Total size</span>
    </el-col>
    <el-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.size }}</span>
    </el-col>
  </el-row>
  <el-row>
    <el-col
      :span="10"
      :offset="2"
      class="local-border border-l border-black"
    >
      <span>Total available messages</span>
    </el-col>
    <el-col
      :span="10"
      class="local-border border-black"
    >
      <span>{{ data.topic.messages }}</span>
    </el-col>
  </el-row>
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
      const resultUsers: TTopic = await http.get<TTopic>('/topics/' + props.id);
      data.topic = resultUsers
    });

    return {
      data,
      props,
    };
  },

});

</script>
<style >

.local-border {
  @apply border-b border-r;
}
</style>
