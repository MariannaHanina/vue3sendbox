<template>
  <div
    class="error inline-block"
    :class="`error--${type}`"
  >
    <component :is="`error-icon-${type}`" />
    {{ details }}
    <span
      v-if="date"
      class="text-xs ml-2"
    >
      ({{ date.toLocaleString() }})
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TErrorType } from '../types';
import ErrorIconHttp from './ErrorIconHttp.vue';
import ErrorIconComponent from './ErrorIconComponent.vue';
import ErrorIconCode from './ErrorIconCode.vue';
import ErrorIconWarning from './ErrorIconWarning.vue';

export default defineComponent({
  name: 'ErrorMessage',
  components: {
    ErrorIconHttp,
    ErrorIconComponent,
    ErrorIconCode,
    ErrorIconWarning,
  },
  props: {
    type: {
      type: String as PropType<TErrorType>,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: null,
    },
  },
});
</script>

<style lang="scss">
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
