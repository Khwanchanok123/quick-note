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
      <RouterLink to="/">&#x1F3E0; ทั้งหมด</RouterLink>
      <RouterLink to="/add">&#128214; เพิ่มโน้ตใหม่</RouterLink>
      <div></div>
      <h3 class="web-title" >Quick Note &#x1F58A;</h3>
      <div></div>
      <div></div>
      <div></div>
      <a @click="signOutButton">&#128683; ออกจากระบบ</a>
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
