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
    <dsn-button
      class="mt-5"
      @click="showCreationModal"
    >
      New
    </dsn-button>
    <el-dialog v-model="dialogVisible">
      <topic-creation-form :create-callback="closeCrationModal" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import OverviewBrokers from '../modules/brokers/components/OverviewBrokers.vue';
import OverviewTopics from '../modules/topics/components/OverviewTopics.vue';

import { getAllBrokers } from '@/modules/brokers/composables/getAllBrokers';
import { getAllTopics } from '@/modules/topics/composables/getAllTopics';

import { ElDialog } from 'element-plus';
import TopicCreationForm from '@/modules/topics/components/TopicCreationForm.vue';

export default defineComponent({
  name: 'ClusterOverview',
  components: {
    OverviewTopics,
    OverviewBrokers,
    ElDialog,
    TopicCreationForm,
  },
  setup () {
    const { brokers } = getAllBrokers();
    const { topics } = getAllTopics();
    const dialogVisible = ref(false);
    const showCreationModal = () => {
      dialogVisible.value = true;
    };

    const closeCrationModal = () => {
      dialogVisible.value = false;
    };

    return {
      brokers,
      topics,
      dialogVisible,
      showCreationModal,
      closeCrationModal,
    };
  },
});
</script>
