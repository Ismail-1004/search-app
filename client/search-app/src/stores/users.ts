import { ref, reactive } from "vue";
import { toast } from 'vue3-toastify';
import { defineStore } from "pinia";
import type { User } from "../types/user";

export const useUsers = defineStore("users", () => {
  const usersList = ref<User[]>([]);
  const loader = ref<Boolean>(false)
  const notFound = ref<string>("");
  const user = reactive<User>({
    email: "",
    number: "",
  });

  let abortController: AbortController | null = null;

  async function searchUser(user: User): Promise<void> {
    if (abortController) {
      abortController.abort();
    }

    abortController = new AbortController();

    const requestData: User = { email: user.email };
    if (user.number) {
      requestData.number = user.number;
    }

    try {
      loader.value = true
      const response = await fetch("http://localhost:5000/api/users/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
        signal: abortController?.signal,
      });
      

      const data = await response.json();
      data.length ? (usersList.value = data) : (notFound.value = data.message);
      loader.value = false
    } catch (e: any) {
      if (e.name === 'AbortError') {
        toast("Прошлый запрос был отменен", {
          autoClose: 3000,
          toastStyle: {
            background: "orange",
            color: "white"
          },
        })
      } else {
        throw e;
      }
    } finally {
      abortController = null;
    }
  }

  function reset() {
    user.email = "";
    user.number = "";
    notFound.value = "";
    usersList.value = [];
  }

  return { user, usersList, searchUser, notFound, reset, loader };
});
