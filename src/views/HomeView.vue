<script setup>
import NotePaper from "@/components/NotePaper.vue";
import { ref } from "vue";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const isLoading = ref(true);
const db = getFirestore(initializeApp);
const docRef = collection(db, "notes");
const noteList = ref([]);
const getCollections = (docRef) => {
  return new Promise((resolve, reject) => {
    getDocs(docRef)
      .then((collections) => {
        collections.docs.forEach((val) => {
          noteList.value.push(val.data());
        });
        isLoading.value = false;
        resolve(collections.docs);
      })
      .catch((err) => {
        isLoading.value = true;
        alert(err.message);
      }),
      reject;
  });
};
getCollections(docRef);
</script>

<template>
  <main class="container">
    <div v-if="isLoading">
      <h3 class="text-center">กำลังโหลดข้อมูล...</h3>
    </div>
    <div class="row" v-else>
      <NotePaper
        :title="note.title"
        :content="note.content"
        v-for="(note, i) in noteList"
        :key="i"
      />
    </div>
  </main>
</template>
