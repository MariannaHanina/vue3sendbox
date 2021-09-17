<template>
  <div class="about">
    <h1>This is an test page</h1>
    <el-row>
      <el-col :span="12">
        <el-button @click="$router.go(-1)">Back</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">12 колонок</el-col>
      <el-col :span="12">12 колонок</el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-input v-model="firstName" placeholder="Имя"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="secondName" placeholder="Фамилия"></el-input>
      </el-col>
      <el-col :span="12">Без отступов</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input v-model="firstName" placeholder="Имя"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="secondName" placeholder="Фамилия"></el-input>
      </el-col>
      <el-col :span="12">С отступами</el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-input
          v-model="number"
          type="number"
          label="number"
          placeholder="number"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-input
          v-model="text"
          type="text"
          label="text"
          placeholder="text"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="secondName" label="Фамилия"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="secondName" label="Фамилия"></el-input>
      </el-col>
    </el-row>
  </div>
  <el-form
    :label-position="labelPosition"
    label-width="150px"
    :model="form"
    ref="formName"
    :rules="rules"
  >
    <el-form-item label="Name" prop="name" >
      <el-input v-model="form.name" type="text"></el-input>
    </el-form-item>
    <el-form-item label="City"  prop="region">
      <el-input v-model="form.region"></el-input>
    </el-form-item>
    <el-form-item label="Smth else" >
      <el-input v-model="form.type"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')"
        >Submit</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  props: {},
  setup () {
    const firstName = ref('');
    const secondName = ref('');
    const text = ref('');
    const number = ref(0);
    const labelPosition = ref('ringht');
    const form = reactive(
      {
        name: null,
        region: null,
        type: null,
      },
    )
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
    )

    const formName = ref(null);
    const submitForm = () => {
      formName.value.validate((valid: boolean) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false;
        }
      })
    }
    return {
      firstName, text, secondName, number, labelPosition, form, rules, formName, submitForm,
    }
  },
});
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
