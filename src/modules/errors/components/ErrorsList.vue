<template>
  <ul v-if="errors.length">
    <li
      v-for="error in errors"
      :key="error.id"
    >
      <error-message
        :type="error.type"
        :details="error.details"
        :date="error.date"
        class="inline-block"
      />
    </li>
  </ul>
  <div v-else>
    No errors.
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TError } from '../types';
import ErrorMessage from './ErrorMessage.vue';

export default defineComponent({
  name: 'ErrorsList',
  components: {
    ErrorMessage,
  },
  props: {
    errors: {
      type: Array as PropType<TError[]>,
      required: true,
    },
  },
});
</script>
