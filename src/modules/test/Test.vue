<template>
  <div class="about">
    <h1>This is an test page</h1>

    <el-switch
      v-model="switcher"
      active-text="Таблица"
      inactive-text="Форма"
    />

    <template v-if="switcher">
      <dsn-table
        :data="data"
        dense
      >
        <dsn-column
          prop="id"
          label="ID"
          width="200"
          sortable
        >
          <template #header>
            Тест слота заголовка
          </template>
          fdfdf
        </dsn-column>
        <dsn-column
          prop="name"
          label="Name"
          width="180"
        />
        <dsn-column
          prop="phone"
          label="Phone"
        />
        <dsn-column
          prop="username"
          label="UserName"
        />
        <dsn-column
          prop="website"
          label="Website"
        />
      </dsn-table>
    </template>
    <template v-else>
      <el-form
        ref="formName"
        :label-position="labelPosition"
        label-width="150px"
        :model="form"
        :rules="rules"
      >
        <el-form-item
          label="Name"
          prop="name"
        >
          <el-input
            v-model="form.name"
            type="text"
          />
        </el-form-item>
        <el-form-item
          label="City"
          prop="region"
        >
          <el-input v-model="form.region" />
        </el-form-item>
        <el-form-item label="Smth else">
          <el-input v-model="form.type" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm()"
          >
            Submit
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm2()"
          >
            Check WS
          </el-button>
        </el-form-item>
      </el-form>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, inject } from 'vue';
import { ElForm } from 'element-plus';
import ApiHttpSingleton from '@/utils/http';
import WSClient from '@/utils/websocket';

export type TUser = {
  id: number,
  email: string,
  name: string,
  phone: string,
  username: string,
  website: string,
  address: {
    street: string,
    city: string,
  },
  company: {
    name:string,
  }
}

export default defineComponent({
  props: {},
  setup () {
    const wsp: WSClient = inject('wsp', new WSClient()); // inject WSClient

    const submitForm2 = async () => {
      const res = await wsp.connect();
      const res2 = wsp.send('test');
      console.log(res);
      console.log(res2);
    };

    const firstName = ref('');
    const secondName = ref('');
    const text = ref('');
    const number = ref(0);
    const labelPosition = ref('right');
    const form = reactive(
      {
        name: null,
        region: null,
        type: null,
      },
    );
    const rules = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please input city',
          trigger: 'change',
        },
      ],
    },
    );

    const formName = ref<typeof ElForm|null>(null);
    const submitForm = () => {
      if (formName.value) {
        formName.value.validate((valid: boolean) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    };

    const http: ApiHttpSingleton = inject('http', ApiHttpSingleton.getInstance()); // inject apiClient
    const data = ref<TUser[]>([]);

    onMounted(async () => {
      const result: TUser[] = await http.get<TUser[]>('/users');
      data.value = result;
      console.log(data.value);
    });

    const switcher = ref(true);
    return {
      firstName,
      text,
      secondName,
      number,
      labelPosition,
      form,
      rules,
      formName,
      switcher,
      data,
      submitForm,
      submitForm2,
    };
  },
});
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
