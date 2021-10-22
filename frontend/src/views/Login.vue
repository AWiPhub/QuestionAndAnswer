<template>
  <a-row
    type="flex"
    justify="center"
    align="middle"
    :style="{ height: '85vh' }"
  >
    <a-spin :spinning="spinning">
      <a-tabs v-model="activeKey">
        <a-tab-pane key="1" tab="Регистрация">
          <a-form
            ref="formRef"
            :model="formState"
            :rules="rules"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 10 }"
          >
            <a-form-item label="Логин">
              <a-input v-model:value="formState.username" />
            </a-form-item>
            <a-form-item label="Пароль">
              <a-input v-model:value="formState.password" type="password" />
            </a-form-item>
            <a-form-item label="Повторите пароль">
              <a-input
                v-model:value="formState.repeatPassword"
                type="password"
              />
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 10, offset: 8 }">
              <a-button type="primary" @click="signUp(formState)"
                >Зарегистрироваться</a-button
              >
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <!-- <a-tab-pane key="2" tab="Вход" force-render>
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 10 }"
        >
          <a-form-item label="Activity name">
            <a-input v-model="formState.username" />
          </a-form-item>
          <a-form-item label="Sub name">
            <a-input v-model="formState.password" type="password" />
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 10, offset: 8 }">
            <a-button type="primary" @click="logIn(formState)">Войти</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane> -->
        <template #renderTabBar="{ DefaultTabBar, ...props }">
          <component
            :is="DefaultTabBar"
            v-bind="props"
            :style="{ zIndex: 1, background: '#fff', textAlign: 'center' }"
          />
        </template>
      </a-tabs>
    </a-spin>
  </a-row>
</template>

<script lang="ts">
import useAPI from "@/api/index";

import { message } from "ant-design-vue";

import { useRouter } from "vue-router";

import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const api = new useAPI();
    const router = useRouter();

    const formRef = ref();
    const formState = reactive({
      username: null,
      password: null,
      repeatPassword: null,
    });

    const spinning = ref(false);

    const logIn = function(form) {
      console.log(form);
    };

    const signUp = function(form) {
      if (form.password == form.repeatPassword) {
        spinning.value = true;
        api.users
          .createUser({
            username: form.username,
            password: form.password,
          })
          .then((res) => {
            if (res) {
              spinning.value = false;
              message.success("Регистрация прошла успешно");
              router.push("/");
            }
          });
      }
    };

    return {
      activeKey: ref("1"),
      formState,
      formRef,
      signUp,
      logIn,
      spinning,
    };
  },
});
</script>
