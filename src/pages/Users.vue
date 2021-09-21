<template>
  <Heading1>Users</Heading1>
  <UserList class="my-10" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Heading1 from '@/components/Heading1.vue';
import UserList from '@/modules/users/UserList.vue';

export default defineComponent({
  name: 'UsersPage',
  components: {
    Heading1,
    UserList,
  },
})
</script>
