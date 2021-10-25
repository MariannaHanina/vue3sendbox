<template>
  <el-page-header @back="goToPath" />
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'DsnPageHeader',
  props: {
    goBack: {
      type: Function as PropType<() => void>,
      default: null,
    },
  },
  setup (props) {
    const { goBack } = toRefs(props);
    const router = useRouter();

    const goHome = () => {
      router.push('/');
    };

    const goToPath = () => {
      if (goBack.value && typeof goBack.value === 'function') {
        goBack.value();
        return;
      }

      goHome();
    };

    return {
      goToPath,
    };
  },
});
</script>
