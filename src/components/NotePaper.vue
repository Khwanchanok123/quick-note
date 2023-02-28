<template>
  <div class="col-md-3">
    <article style="padding: 1em">
      <h4 style="margin: 0" v-if="props.title">{{ props.title }}</h4>

      <small style="display: block">{{ props.content }}</small>

      <small style="cursor: pointer" @click="openDialog"
        ><i class="fa fa-eye" aria-hidden="true"></i
      ></small>

      <dialog v-bind:open="dialogOpen">
        <article style="width: 400px;">
          <header>
            <a @click="closeDialog" aria-label="Close" class="close"></a>
            {{ props.title }}
          </header>
          <p>
            {{ props.content }}
          </p>
        </article>
      </dialog>
    </article>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";

const dialogOpen = ref(false);
const closeDialog = () => (dialogOpen.value = false);
const openDialog = () => (dialogOpen.value = true);
const props = defineProps({
  title: String,
  content: String
});
</script>
<style scoped>
.deleter {
  margin-top: 0.5em;
  color: crimson;
  cursor: pointer;
}
</style>
