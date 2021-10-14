<template>
  <dsn-table
    v-loading="loading"
    :data="acls"
    class="mt-5"
  >
    <dsn-column
      prop="name"
      label="Pattern Name"
    />
    <dsn-column
      prop="principal"
      label="Principal"
    />
    <dsn-column
      prop="resourceType"
      label="Resource Type"
    />
    <dsn-column
      prop="patternType"
      label="Pattern Type"
    />
    <dsn-column
      prop="operation"
      label="Operation"
    />
    <dsn-column
      prop="host"
      label="Host"
    />
    <dsn-column
      prop="permissionType"
      label="Permission Type"
    />
  </dsn-table>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { TAcl } from '../types';
import useLoading from '@/composables/useLoading';

export default defineComponent({
  name: 'ACLTable',
  props: {
    acls: {
      type: Array as PropType<TAcl[]>,
      required: true,
    },
  },
  setup (props) {
    const { acls } = toRefs(props);
    const { loading } = useLoading<TAcl>(acls);

    return {
      loading,
    };
  },
});
</script>
