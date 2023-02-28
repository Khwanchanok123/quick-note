<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mid-screen">
    <div class="warn-card">
      <img src="https://i.imgur.com/cvOVRRU.png" class="lock-icon" alt="lock" />
      <div style="padding-top: 1em; padding-bottom: 0.8em">
        <h3 style="color: red">มีบางอย่างผิดปกติ</h3>
        <p>
          เว็บไซต์นี้ได้รับการปกป้องโดยระบบป้องกันการคัดลอกและต้องใช้รหัสขออนุญาตที่ถูกต้องเพื่อเข้าถึงข้อมูล
        </p>
        <p>
          โปรดอย่าทำซ้ำงานนี้โดยไม่ได้รับอนุญาต
          หากต้องการขอสิทธิ์เข้าถึงโปรดติดต่อผู้พัฒนาเว็บไซต์
        </p>
        <p>
          การปกป้องซอร์สโค้ดของมีความสำคัญเนื่องจากทุกอย่างมีการลงทุนทั้ง เวลา
          ทรัพยากร และความเชี่ยวชาญ <br />
          การเข้าถึงซอร์สโค้ดโดยไม่ได้รับอนุญาตอาจทำให้ความสมบูรณ์และคุณค่าของโค้ดลดลง
        </p>
      </div>
      <div v-if="!isLoading">
        <input
          v-model="licenseKey"
          type="text"
          placeholder="Activation Key..."
        />
        <button @click="activateKey">ตรวจสอบข้อมูล</button>
      </div>
      <div v-else>กำลังตรวจสอบข้อมูล...</div>
      <small style="font-size: 8pt">CopyKiller alpha 0.2</small>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";

const licenseKey = ref("");
const isLoading = ref(false);

function activateKey() {
  isLoading.value = true;
  axios
    .get(
      `https://api.codename-t.com/checkKey?key=${licenseKey.value}&site=${window.location.hostname}&ac=redeem`
    )
    .then((res) => {
      if (res.data.canRedeem) {
        alert("ได้รับสิทธ์เข้าถึงแล้ว");
        window.location.reload();
      } else {
        alert("เข้าถึงไม่ได้ โปรดตรวจสอบ Key");
        isLoading.value = false;
      }
    })
    .catch(() => {
      alert("ติดต่อกับระบบตรวจสอบไม่ได้");
      isLoading.value = false;
    });
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@200;300;400;500&display=swap");
* {
  font-family: "Noto Sans Thai", sans-serif;
}
.lock-icon {
  height: 100px;
  display: block;
}
.mid-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff2f2;
}

.warn-card {
  width: 800px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 1em;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  border-top: 5px solid crimson;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 10px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url("https://sv1.picz.in.th/images/2023/02/11/Ll6wYJ.png") no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
