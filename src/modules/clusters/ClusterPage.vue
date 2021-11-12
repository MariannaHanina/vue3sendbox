<template>
  <dsn-heading-1>Jarvis Cluster Overview</dsn-heading-1>
  <div class="mt-5">
    <cluster-summary
      :cluster-name="clusterSummary.name"
      :cluster-summary="clusterSummary"
    />
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
      <topic-creation-form @create="closeCreationModal" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ClusterSummary from '@/modules/clusters/components/ClusterSummary.vue';
import OverviewBrokers from '@/modules/brokers/components/OverviewBrokers.vue';
import OverviewTopics from '@/modules/topics/components/OverviewTopics.vue';

import { getAllBrokers } from '@/modules/brokers/composables/getAllBrokers';
import { getAllTopics } from '@/modules/topics/composables/getAllTopics';
import { getClusterSummary } from '@/modules/clusters/composables/getClusterSummary';

import { ElDialog } from 'element-plus';
import TopicCreationForm from '@/modules/topics/components/TopicCreationForm.vue';

export default defineComponent({
  name: 'ClusterOverview',
  components: {
    ClusterSummary,
    OverviewTopics,
    OverviewBrokers,
    ElDialog,
    TopicCreationForm,
  },
  setup () {
    const { brokers } = getAllBrokers();
    const { topics } = getAllTopics();
    const clusterSummary = getClusterSummary();

    const dialogVisible = ref(false);
    const showCreationModal = () => {
      dialogVisible.value = true;
    };

    const closeCreationModal = () => {
      dialogVisible.value = false;
    };

    return {
      clusterSummary,
      brokers,
      topics,
      dialogVisible,
      showCreationModal,
      closeCreationModal,
    };
  },
});
</script>
