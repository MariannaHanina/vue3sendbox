<template>
  <div class="text-left p-4 pt-0">
    <div class="flex justify-between">
      <ul class="errors-description text-sm">
        <li class="errors-description__item">
          <error-message
            type="http"
            details="HTTP error"
          />
        </li>
        <li class="errors-description__item">
          <error-message
            type="component"
            details="Component error"
          />
        </li>
        <li class="errors-description__item">
          <error-message
            type="code"
            details="Another code error"
          />
        </li>
        <li class="errors-description__item">
          <error-message
            type="warning"
            details="Warning"
          />
        </li>
      </ul>
      <dsn-button @click="clearList">
        Clear all
      </dsn-button>
    </div>
    <errors-list
      :errors="errors"
      class="mt-4 overflow-auto max-h-44"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import ErrorsList from './ErrorsList.vue';
import ErrorMessage from './ErrorMessage.vue';

export default defineComponent({
  components: {
    ErrorsList,
    ErrorMessage,
  },
  setup () {
    const store = useStore();

    const errors = computed(() => store.getters['errors/sortedByDate']);
    const clearList = () => store.dispatch('errors/clearErrors');

    return {
      errors,
      clearList,
    };
  },
});
</script>

<style lang="scss">
.errors-description__item {
  @apply inline-block;
}

.error {
  @apply rounded py-1 px-2 m-1 align-middle;

  &--http {
    @apply bg-red-100;
  }

  &--component {
    @apply bg-red-200;
  }

  &--code {
    @apply bg-red-300;
  }

  &--warning {
    @apply bg-yellow-300;
  }
}
</style>
