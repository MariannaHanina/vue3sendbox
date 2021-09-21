<template>
  <article>
    <h2>User List</h2>
    <ul>
      <li v-for="user in userList" :key="user.id">
        {{ user.name }} {{ user.surname }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import './store';

export default defineComponent({
  name: 'UserList',
  setup () {
    const store = useStore();
    const userList = computed(() => store.state.users.users);

    return {
      userList,
    }
  },
});
</script>
