<script lang="ts" setup>
import type { User } from '../types/user';
defineProps<{ users: User[] }>()
</script>

<template>
  <div class="list">
    <h2 class="list__title">Users</h2>
    <ul class="list__content">
      <li class="list__item" v-for="user in users" :key="user.email">
        <a class="list__item-link" :href="`mailto:${user.email}`"> Email: {{ user.email }}</a>
        <a class="list__item-link" :href="`tel:${user.number}`"> Number: {{ user.number }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.list {
  max-width: 500px;
  width: 100%;
  background: white;
  padding: 15px;
  border-radius: 10px;

  &__title {
    margin-bottom: 10px;
    font-size: 30px;
  }

  &__item {
    border: 1px solid black;
    padding: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &-link {
        color: black;
        display: inline-block;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
  }
}
</style>
