<template>
  <dsn-table
    :data="data"
    dense
  >
    <dsn-column
      prop="host"
      label="Host"
      width="400"
    >
      <template #header>
        <el-icon
          style="vertical-align: middle;"
          :size="20"
          color="#409EFC"
        >
          <edit />
        </el-icon>
        Проверка иконки
      </template>
    </dsn-column>
    <dsn-column
      prop="port"
      label="Port"
      min-width="100"
    />
    <dsn-column
      prop="rack"
      label="Rack"
    />
    <dsn-column
      prop="controller"
      label="Controller"
    />
    <dsn-column
      prop="partitions"
      label="Partitions"
    />
  </dsn-table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, inject } from 'vue';
import ApiHttp from '@/utils/http'

export type TBroker = {
  id: number,
  host: string,
  port: string,
  rack: string,
  controller: string,
  partitions: string,
}

export default defineComponent({
  props: {},
  setup () {
    const http: ApiHttp = inject('http', new ApiHttp({})) // inject apiClient
    const data = ref<TBroker[]>([]);
    onMounted(async () => {
      const result: TBroker[] = await http.get<TBroker>('/brokers');
      data.value = result
    });

    return {
      data,
    }
  },
});
</script>
