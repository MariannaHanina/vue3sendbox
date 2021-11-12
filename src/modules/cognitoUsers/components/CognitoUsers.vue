<template>
  <dsn-table :data="users">
    <dsn-column
      prop="Username"
      label="Username"
    />
    <dsn-column
      prop="Enabled"
      label="Enabled"
    >
      <template #default="scope">
        {{ scope.row.Enabled ? "Enabled" : "Disabled" }}
      </template>
    </dsn-column>
    <dsn-column
      prop="UserStatus"
      label="Status"
    >
      <template #default="scope">
        <span class="capitalize">
          {{ scope.row.UserStatus.replace('_', ' ').toLowerCase() }}
        </span>
      </template>
    </dsn-column>
    <dsn-column
      prop="UserLastModifiedDate"
      label="Updated"
    />
    <dsn-column
      prop="UserCreateDate"
      label="Created"
    />
  </dsn-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CognitoUsers',
  setup () {
    const users = [{
      Attributes: {},
      Enabled: true,
      MFAOptions: {},
      UserCreateDate: new Date(),
      UserLastModifiedDate: new Date(),
      Username: 'User1',
      UserStatus: 'CONFIRMED',
    }];

    return {
      users,
    };
  },
});
</script>
