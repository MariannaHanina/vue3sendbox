<template>
  <div>
    <ul class="errors-description">
      <li class="errors-description__item error error--http">
        <el-icon>
          <connection />
        </el-icon>
        HTTP error
      </li>
      <li class="errors-description__item error error--component">
        <el-icon>
          <platform />
        </el-icon>
        Component error
      </li>
      <li class="errors-description__item error error--code">
        <el-icon>
          <expand />
        </el-icon>
        Another code error
      </li>
    </ul>
    Тут будет компонент списока ошибок.
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // setup () {
  // },
})
</script>

<style lang="scss">
.errors-description__item {
  @apply inline-block;
}

.error {
  @apply rounded py-1 px-2 m-1;

  &--http {
    @apply bg-red-100;
  }

  &--component {
    @apply bg-red-200;
  }

  &--code {
    @apply bg-red-300;
  }
}
</style>
