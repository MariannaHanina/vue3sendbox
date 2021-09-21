<template>
  <article>
    <Heading2>User List</Heading2>
    <ul class="my-5">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} {{ user.surname }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import './store';

import Heading2 from '@/components/Heading2.vue';

export default defineComponent({
  name: 'UserList',
  components: {
    Heading2,
  },
  setup () {
    const store = useStore();
    const users = computed(() => store.state.users.users);

    return {
      users,
    }
  },
});
</script>
