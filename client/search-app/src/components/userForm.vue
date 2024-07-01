<script lang="ts" setup>
import { useUsers } from "../stores/users";
import { toast } from 'vue3-toastify';

const usersStore = useUsers();

async function findUser(): Promise<void> {
  usersStore.searchUser(usersStore.user);

  usersStore.reset()
  toast('Ваш запрос обрабатывется', {
    autoClose: 3000
  });
  
}
</script>

<template>
  <form class="form" @submit.prevent="findUser">
    <h1 class="form__title">Search for a user:</h1>
    <input
      v-model="usersStore.user.email"
      type="email"
      id="email"
      class="form__input"
      placeholder="Enter email"
      required
    />

    <input
      v-model="usersStore.user.number"
      v-format-number
      type="text"
      id="number"
      class="form__input"
      placeholder="Enter number"
    />

    <button class="form__btn">Submit</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  background: white;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;

  &__title {
    margin-bottom: 15px;
  }

  &__input {
    padding: 8px;
    border-radius: 8px;
    border: 1px solid black;
    margin-bottom: 15px;

    &:focus {
      outline: none;
    }
  }

  &__btn {
    border-radius: 8px;
    padding: 8px;
    border: none;
    background: #023047;
    color: white;
    cursor: pointer;
  }
}
</style>
