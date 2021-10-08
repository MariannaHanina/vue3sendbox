<template>
  <dsn-form label-width="5.5rem">
    <dsn-form-item label="User Name">
      <dsn-input v-model="credentials.name" />
    </dsn-form-item>
    <dsn-form-item label="Password">
      <dsn-input
        v-model="credentials.password"
        type="password"
      />
    </dsn-form-item>
    <dsn-form-item>
      <dsn-button
        type="primary"
        @click="logIn"
      >
        Login
      </dsn-button>
    </dsn-form-item>
  </dsn-form>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { defineComponent, ref } from 'vue';
import { ElNotification } from 'element-plus';

export default defineComponent({
  name: 'AuthForm',
  setup () {
    const store = useStore();
    const router = useRouter();

    const credentials = ref({
      name: null,
      password: null,
    });

    const logIn = async () => {
      try {
        await store.dispatch('auth/authRequest', credentials);
        router.push({ name: 'Home' });
      } catch (e) {
        ElNotification({
          title: 'Authorization Error',
          message: e,
          type: 'error',
        })
      }
    };

    return {
      credentials,
      logIn,
    };
  },
});
</script>
