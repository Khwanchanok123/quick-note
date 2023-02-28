import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const isLogin = ref(false);
  const email = ref("");

  function setCredentials(emailVal) {
    isLogin.value = true;
    email.value = emailVal;
  }

  function clearState() {
    isLogin.value = false;
    email.value = "";
  }
  return { setCredentials, isLogin, clearState, email };
});
