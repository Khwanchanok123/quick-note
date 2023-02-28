<script async setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";

const router = useRouter();
const firebaseAuth = getAuth();
const auth = useAuthStore();
onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    auth.setCredentials(user.email);
  }
});
function signOutButton() {
  signOut(firebaseAuth)
    .then(() => {
      auth.clearState();
      alert("ออกจากระบบแล้ว");
      router.push("/login");
    })
    .catch(() => {
      alert("An error happened during the sign-out process");
    });
}
</script>

<template>
  <header>
    <nav class="container" style="margin-top: 2em" v-if="auth.isLogin">
      <RouterLink to="/">ทั้งหมด</RouterLink>
      <RouterLink to="/add">เพิ่มโน้ตใหม่</RouterLink>
      <div></div>
      <h4 class="web-title">Quick Note</h4>
      <div></div>
      <div></div>
      <div></div>
      <a @click="signOutButton">ออกจากระบบ</a>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.web-title {
  text-align: center;
  margin-bottom: 0;
  justify-self: center;
}
</style>
