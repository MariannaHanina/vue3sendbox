<template>
  <div class="acl-page">
    <dsn-heading-1 class="text-center">
      ACLs
    </dsn-heading-1>
    <acl-filter
      class="mt-10"
      @acls-filter="getSearchText"
    />
    <acl-table :acls="filteredACLs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { fetchACLs } from './api';
import { TAcl } from './types';
import useFilter from './composables/useFilter';
import AclFilter from './components/ACLFilter.vue';
import AclTable from './components/ACLTable.vue';
import DsnNotification from '@/components/DsnNotification';
import { codeErrorHandler } from '@/modules/errors/utils';

export default defineComponent({
  name: 'ACLPage',
  components: {
    AclFilter,
    AclTable,
  },
  setup () {
    const ACLs = ref<TAcl[]>([]);
    const searchText = ref('');
    const { filter } = useFilter<TAcl>(ACLs, searchText);
    const filteredACLs = computed(filter);

    const getSearchText = (text: string) => {
      searchText.value = text;
    };

    onMounted(async () => {
      try {
        ACLs.value = await fetchACLs();
      } catch (e) {
        DsnNotification({
          title: 'ACLs loading Error',
          message: e,
        });

        codeErrorHandler(TypeError(`Fetch ACLs error. ${e.message}.`));
      }
    });

    return {
      filteredACLs,
      getSearchText,
    };
  },
});
</script>
