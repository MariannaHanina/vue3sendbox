<template>
  <dsn-table
    :data="brokers"
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
import { defineComponent, PropType } from 'vue';
import { TBroker } from '../types'

export default defineComponent({
  props: {
    brokers: {
      type: Array as PropType<TBroker[]>,
      required: true,
    },
  },
});
</script>
