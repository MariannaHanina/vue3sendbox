<template>
  <dsn-table
    :data="dataTable"
    @row-click="onRowClick($event)"
  >
    <dsn-column
      prop="name"
      label="Name"
      width="400"
    >
      <template #header>
        <el-row>
          <el-col
            :span="6"
          >
            Name
          </el-col>
          <el-col
            :span="18"
          >
            <dsn-input
              v-model="searchTopicName"
              size="mini"
              placeholder="Type to search"
              @change="filterHandler()"
            />
          </el-col>
        </el-row>
      </template>
    </dsn-column>
    <dsn-column
      prop="partitions"
      label="Partitions"
      min-width="100"
    />
    <dsn-column
      prop="preferred"
      label="Preferred"
    />
    <dsn-column
      prop="replicated"
      label="Under-replicated"
    />
    <dsn-column
      prop="config"
      label="Custom config"
    />
  </dsn-table>
</template>

<script lang="ts">
import { TTopic } from '@/modules/topics/types';
import { defineComponent, ref, PropType, toRefs, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'OverviewTopics',
  props: {
    topics: {
      type: Array as PropType<TTopic[]>,
      required: true,
    },
  },
  setup (props) {
    const router = useRouter();

    const dataTable = ref<TTopic[]>([]);
    const searchTopicName = ref('');

    const { topics } = toRefs(props);
    watchEffect(() => {
      dataTable.value = topics.value;
    });

    function filterTopics (topic: TTopic) {
      return topic.name.toLowerCase().indexOf(searchTopicName.value.toLowerCase()) >= 0;
    }
    function clearFilter () {
      dataTable.value = topics.value;
    }
    function filterHandler () {
      if (searchTopicName.value === '') {
        clearFilter();
        return;
      }

      dataTable.value = topics.value.filter(filterTopics);
    }
    clearFilter();

    function onRowClick (topic: TTopic) {
      router.push({ name: 'Topic', params: { id: topic.id } });
    }

    return {
      dataTable,
      searchTopicName,
      filterHandler,
      clearFilter,
      onRowClick,
      filterTopics,
    };
  },
});
</script>
