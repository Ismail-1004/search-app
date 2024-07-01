<script setup lang="ts">
import { useUsers } from "../stores/users"
import UserForm from "../components/userForm.vue"
import UsersList from "../components/usersList.vue"
import Loader from "../components/loader.vue"

const usersStore = useUsers()
</script>

<template>
  <div class="search">
    <UserForm />
    <UsersList :users="usersStore.usersList" v-if="usersStore.usersList.length" />
    <h2 class="search__notFound" v-else> {{ usersStore.notFound }} </h2>
    <Loader v-if="usersStore.loader" />
  </div>
</template>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__notFound {
    font-size: 25px;
    color: white;
  }
}
</style>
