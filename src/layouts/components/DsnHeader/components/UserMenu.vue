<template>
  <el-popover>
    <template #reference>
      <div class="flex items-center cursor-pointer">
        <el-avatar
          size="small"
          class="mr-2"
        >
          <el-icon>
            <user-filled />
          </el-icon>
        </el-avatar>
        <a class="hover:underline">{{ user.username }}</a>
      </div>
    </template>
    <div class="min-w-max">
      {{ user.role }}
      <a
        href=""
        class="block my-3"
      >
        Settings
      </a>
      <logout-button class="ml-4 w-full" />
    </div>
  </el-popover>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import LogoutButton from './LogoutButton.vue';

export default defineComponent({
  name: 'UserMenu',
  components: {
    LogoutButton,
  },
  setup () {
    const store = useStore();
    const user = computed(() => store.state.currentCognitoUser.user);
    const fetchUser = () => store.dispatch('currentCognitoUser/fetchUser');

    onMounted(() => {
      fetchUser();
    });

    return {
      user,
    };
  },
});
</script>
