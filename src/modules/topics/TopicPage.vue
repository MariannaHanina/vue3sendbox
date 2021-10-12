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
  <dsn-heading-2>
    Partition detail
  </dsn-heading-2>
  <overview-partitions :partitions="partitions" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import OverviewPartitions from '@/modules/partitions/components/OverviewPartitions.vue';

import { getTopicByID } from './composables/getTopicByID';
import { getAllPartitions } from '@/modules/partitions/composables/getAllPartitions';

export default defineComponent({
  name: 'TopicPage',
  components: { OverviewPartitions },
  props: {
    id: { type: String, required: true },
  },
  setup (props) {
    const data = getTopicByID(props.id);
    const partitions = getAllPartitions(props.id);

    return {
      data,
      partitions,
    };
  },

});

</script>
<style >

.local-border {
  @apply border-b border-r;
}
</style>
