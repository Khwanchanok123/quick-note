<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mid-screen">
    <div class="warn-card">
      <img
        src="https://sv1.picz.in.th/images/2023/02/13/LP7Sak.png"
        class="lock-icon"
        alt="lock"
      />
      <div style="padding-top: 1em; padding-bottom: 0.8em">
        <h3 style="color: red">เกิดปัญหากับระบบตรวจสอบ</h3>
        <p>
          เว็บไซต์นี้ได้รับการปกป้องโดยระบบป้องกันการคัดลอกและต้องใช้รหัสขออนุญาตที่ถูกต้องเพื่อเข้าถึงข้อมูล
        </p>
        <p>
          ในการตรวจสอบความถูกต้องจำเป็นต้องใช้การติดต่อกับฐานข้อมูลในการตรวจสอบสิทธ์เพิ่อมอบการเข้าถึงได้
        </p>
        <p>
          ซึ่งในตอนนี้ไม่สามารถติดต่อกับระบบได้ โปรดลองอีกครั้งภายใน 5 - 10 นาที
        </p>
      </div>
      <small style="font-size: 8pt">CopyKiller alpha 0.2</small>
    </div>
  </div>
</template>
<script setup>
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
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://sv1.picz.in.th/images/2023/02/13/LP77Ol.png")
      no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
