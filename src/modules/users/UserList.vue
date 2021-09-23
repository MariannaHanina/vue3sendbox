<template>
  <article>
    <Heading2>User List</Heading2>
    <el-alert
      class="w-40 mx-auto my-5"
      title="No users"
      type="info"
      v-if="!users.length"
      :closable="false"
    />
    <ul class="my-5" v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} {{ user.surname }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TUser } from './types';
import Heading2 from '@/components/Heading2.vue';

export default defineComponent({
  name: 'UserList',
  components: {
    Heading2,
  },
  props: {
    users: {
      type: Array as PropType<TUser[]>,
      required: true,
    },
  },
});
</script>
