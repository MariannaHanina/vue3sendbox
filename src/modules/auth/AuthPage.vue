<template>
  <div class="auth-page py-32">
    <dsn-heading1 class="mb-14">
      Authorization
    </dsn-heading1>
    <auth-form class="w-80 mx-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthForm from '@/modules/auth/components/AuthForm.vue';

export default defineComponent({
  name: 'AuthPage',
  components: {
    AuthForm,
  },
});
</script>
