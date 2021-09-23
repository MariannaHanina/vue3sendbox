<template>
  <article>
    <dsn-heading2>User List</dsn-heading2>
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
import { TUser } from '@/modules/users/types';

export default defineComponent({
  name: 'UserList',
  props: {
    users: {
      type: Array as PropType<TUser[]>,
      required: true,
    },
  },
});
</script>
