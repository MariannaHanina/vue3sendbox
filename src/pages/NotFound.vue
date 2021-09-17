<template>
  <el-page-header @back="goBack" content="404. Page Not Found"></el-page-header>
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
      goBack
    };
  }
});
</script>
