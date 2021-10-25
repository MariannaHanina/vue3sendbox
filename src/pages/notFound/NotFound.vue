<template>
  <dsn-page-header
    content="404. Page Not Found"
    :go-back="goBack"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup () {
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
    };
  },
});
</script>
