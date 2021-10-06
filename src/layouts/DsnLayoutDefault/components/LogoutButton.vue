<template>
  <dsn-button @click="logout">
    Logout
  </dsn-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LogoutButton',
  setup () {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      store.dispatch('auth/authLogout');
      router.push({ name: 'Auth' });
    };

    return {
      logout,
    }
  },
})
</script>
