<template>
  <div>
    <dsn-form @submit.prevent>
      <dsn-form-item label="Search filter">
        <dsn-input
          v-model="searchText"
          title="Power Filter: space for OR, '!' for exclude"
          @keyup="filter"
        />
      </dsn-form-item>
    </dsn-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['acls-filter'],
  setup (props, { emit }) {
    const searchText = ref('');
    const filter = () => emit('acls-filter', searchText.value);

    return {
      searchText,
      filter,
    };
  },
});
</script>
