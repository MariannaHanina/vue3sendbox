<template>
  <div>
    <el-alert
      v-if="!users.length"
      class="w-40 mx-auto my-5"
      title="No users"
      type="info"
      :closable="false"
    />
    <dsn-table :data="users">
      <dsn-column
        prop="username"
        label="User name"
      />
      <dsn-column
        label="Settings"
        width="170"
        align="center"
      >
        <template #default="scope">
          <dsn-button
            size="mini"
            type="success"
            @click="editUser(scope.id)"
          >
            Edit
          </dsn-button>
          <dsn-button
            size="mini"
            type="danger"
            @click="deleteUser(scope.id)"
          >
            Delete
          </dsn-button>
        </template>
      </dsn-column>
    </dsn-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TUser } from '@/modules/users/types';

export default defineComponent({
  name: 'UserList',
  props: {
    users: {
      type: Array as PropType<TUser[]>,
      required: true,
    },
  },
});
</script>
