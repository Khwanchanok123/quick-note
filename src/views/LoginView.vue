<template>
  <div class="container">
    <div class="row" style="min-height: 100vh">
      <div class="col-7" style="margin: auto">
        <div class="alert" v-if="firebaseError">{{ firebaseError }}</div>
        <article>
          <h3 style="text-align: center">เข้าสู่ระบบ</h3>
          <input type="email" v-model="email" placeholder="อีเมล์" />
          <input type="password" v-model="password" placeholder="รหัสผ่าน" />
          <button :aria-busy="isBtnLoad" type="button" value="เข้าสู่ระบบ" @click="register">
            {{ btnMessage }}
          </button>
          <RouterLink to="/register">สมัครสมาชิก</RouterLink>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const [email, password] = [ref(""), ref("")];
const firebaseError = ref();
const [isBtnLoad, btnMessage] = [ref(false), ref("เข้าสู่ระบบ")];
const router = useRouter();

function register() {
  const auth = getAuth();
  [isBtnLoad.value, btnMessage.value] = [true, "กำลังโหลด...."];
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      [isBtnLoad.value, btnMessage.value] = [false, "เข้าสู่ระบบ"];
      firebaseError.value = errorMessage;
      // ..
    });
}
</script>
<style scoped>
.alert {
  color: white;
  background: red;
  padding: 1em;
}
</style>
