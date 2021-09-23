<template>
  <Heading1>Users</Heading1>
  <UserList class="my-10" :users="users" />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import '@/modules/users/store';

import Heading1 from '@/components/Heading1.vue';
import UserList from '@/modules/users/UserList.vue';

export default defineComponent({
  name: 'UsersPage',
  components: {
    Heading1,
    UserList,
  },
  setup () {
    const store = useStore();
    const users = computed(() => store.state.users.users);
    const fetchUsers = () => store.dispatch('users/fetchUsers');

    onMounted(() => {
      fetchUsers();
    });

    return {
      users,
    }
  },
})
</script>
