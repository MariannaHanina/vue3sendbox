<template>
  <dsn-heading1>Users</dsn-heading1>
  <user-list
    class="my-10"
    :users="users"
  />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import UserList from '@/modules/users/components/UserList.vue';

export default defineComponent({
  name: 'UsersPage',
  components: {
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
    };
  },
});
</script>
