<template>
  <dsn-heading-2 class="text-center">
    Topic creation
  </dsn-heading-2>
  <dsn-form
    ref="formRef"
    class="mt-7"
    label-width="10rem"
    :model="newTopic"
    :rules="rules"
  >
    <dsn-form-item
      label="Topic name"
      prop="name"
    >
      <dsn-input v-model="newTopic.name" />
    </dsn-form-item>
    <dsn-form-item
      label="Number of partitions"
      prop="partitions"
    >
      <dsn-input-number v-model="newTopic.partitions" />
    </dsn-form-item>
    <dsn-form-item
      label="Replication factor"
      prop="replicated"
    >
      <dsn-input-number
        v-model="newTopic.replicated"
      />
    </dsn-form-item>
    <dsn-form-item>
      <dsn-button @click="createTopic">
        Create
      </dsn-button>
    </dsn-form-item>
  </dsn-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { addTopic } from '../api';

export default defineComponent({
  name: 'TopicCreationForm',
  props: {
    createCallback: {
      type: Function,
      default: null,
    },
  },
  setup (props) {
    const createCallback = ref(props.createCallback);
    const formRef = ref();
    const newTopic = ref({
      name: '',
      partitions: 1,
      replicated: 0,
    });

    const rules = {
      name: [{
        required: true,
        message: 'Please input Name of Topic',
      }],
      partitions: [{
        required: true,
        message: 'Please input number of Partitions',
      }],
      replicated: [{
        required: true,
        message: 'Please input Replication factor',
      }],
    };

    const createTopic = () => {
      const { form } = formRef.value;

      form.validate(async (valid: boolean) => {
        if (valid) {
          await addTopic(newTopic.value);
          createCallback.value();
        }
      });
    };

    return {
      formRef,
      rules,
      newTopic,
      createTopic,
    };
  },
});
</script>
