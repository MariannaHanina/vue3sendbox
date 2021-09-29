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
import { defineComponent, ref, onMounted, inject } from 'vue';
import ApiHttp from '@/utils/http'

export type TUser = {
  id: number,
  email: string,
  name: string,
  phone: string,
  username: string,
  website: string,
  address: {
    street: string,
    city: string,
  },
  company: {
    name:string,
  }
}

export default defineComponent({
  props: {},
  setup () {
    const http: ApiHttp = inject('http', new ApiHttp({})) // inject apiClient
    const data = ref<TUser[]>([]);
    const dataTable = ref<TUser[]>([]);
    onMounted(async () => {
      const result: TUser[] = await http.get<TUser>('/users');
      data.value = result

      clearFilter();
    });

    const switcher = ref(true);
    const searchTopicName = ref('');

    function clearFilter () {
      dataTable.value = data.value
    }
    function filterHandler () {
      if (searchTopicName.value === '') {
        clearFilter();
        return;
      }

      dataTable.value = data.value.filter((user: TUser) => {
        return user.name.toLowerCase().indexOf(searchTopicName.value) >= 0
      })
    }

    return {
      switcher,
      data,
      dataTable,
      searchTopicName,
      filterHandler,
      clearFilter,
    }
  },
});
</script>
