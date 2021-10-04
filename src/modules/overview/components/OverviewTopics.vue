<template>
  <dsn-table
    :data="dataTable"
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
      prop="phone"
      label="Phone"
      min-width="100"
    />
    <dsn-column
      prop="username"
      label="UserName"
    />
    <dsn-column
      prop="website"
      label="Website"
    />
  </dsn-table>
</template>

<script lang="ts">
import { TUser } from '../types';
import { defineComponent, ref, PropType, toRefs, watchEffect } from 'vue';

export default defineComponent({
  props: {
    users: {
      type: Array as PropType<TUser[]>,
      required: true,
    },
    test: { type: Number, default: 0 },
  },
  setup (props) {
    const dataTable = ref<TUser[]>([]);
    const searchTopicName = ref('');

    const { users } = toRefs(props)
    watchEffect(() => {
      dataTable.value = users.value;
    })

    function clearFilter () {
      dataTable.value = users.value;
    }
    function filterHandler () {
      if (searchTopicName.value === '') {
        clearFilter();
        return;
      }

      dataTable.value = users.value.filter((user: TUser) => {
        return user.name.toLowerCase().indexOf(searchTopicName.value) >= 0
      })
    }
    clearFilter();

    return {
      dataTable,
      searchTopicName,
      filterHandler,
      clearFilter,
    }
  },
});
</script>
