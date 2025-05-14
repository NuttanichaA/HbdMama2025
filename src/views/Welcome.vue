<script setup>
import { ref, onMounted } from 'vue';

const isBirthday = ref(false)
onMounted(() => {
  const today = new Date()
  isBirthday.value = today.getDate() === 15 && today.getMonth() === 4
})
</script>

<template>
  <div class="font-ibm flex flex-col items-center justify-center gap-7 h-screen">
    <div class="text-xl text-center px-6 py-3 border-2 border-[#096B68] rounded-lg">
      <p class="font-bold">มีข้อความใหม่ส่งถึงคุณ</p>
      <p>เปิดดูสิ!</p>
    </div>
    <div class="animate-bounce">
      <div class="w-3 h-3 rounded-full bg-red-800 relative top-3 left-15"></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        class="size-15">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    </div>
    <div>
      <RouterLink to="/HbdMama">
        <button
          class="cursor-pointer flex gap-2 font-semibold text-[#FFFBDE] px-6 py-2 pr-3 bg-[#096B68] rounded-r-full rounded-l-full">
          <p>ไปเลยยย</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
            class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  @keyframes upDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
</style>