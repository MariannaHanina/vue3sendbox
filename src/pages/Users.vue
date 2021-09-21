<template>
  <h1>Users</h1>
  <UserList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '@/modules/users/UserList.vue';

export default defineComponent({
  name: 'UsersPage',
  components: {
    UserList,
  },
})
</script>
