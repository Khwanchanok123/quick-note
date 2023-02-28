<template>
  <div class="container">
    <div class="row" style="min-height: 80vh">
      <div class="col-8" style="margin: auto">
        <article>
          <input type="text" v-model="title" placeholder="หัวข้อโน้ต" />
          <textarea v-model="content" placeholder="จดสิ่งต่างๆในนี้" rows="8"></textarea>
          <button @click="saveContent" :aria-busy="isBtnLoad" type="button">{{ btnMessage }}</button>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { useRouter } from "vue-router";
const [title, content] = [ref(), ref()];

const db = getFirestore(initializeApp);
const auth = getAuth();
const user = auth.currentUser;
const router = useRouter();

const [isBtnLoad, btnMessage] = [ref(false), ref("บันทึก")];
async function saveContent() {
  [isBtnLoad.value, btnMessage.value] = [true, "กำลังโหลด...."];
  const docRef = {
    title: title.value,
    content: content.value,
    user: user.email
  };
  return new Promise((reslove, reject) => {
    addDoc(collection(db, "notes"), docRef).then((callback) => {
      reslove(callback);
    }),
      reject;
  })
    .then(() => {
      router.push("/");
    })
    .catch(() => {
      [isBtnLoad.value, btnMessage.value] = [false, "บันทึก"];
      alert("Failed to save");
    });
}
</script>
<style scoped></style>
