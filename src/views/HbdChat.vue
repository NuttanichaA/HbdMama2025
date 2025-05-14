<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const messages = ref(["มีความสุขมาก ๆ นะคะ💗", "กอด ๆ 🫂", "ขอให้เป็นวันที่ดีนะ🍀", "กินข้าวยางง😋"])
const emojis = ref(["💝", "❣️", "💖", "🥰"])
const currentMessage = ref(0)
const currentEmoji = ref(0)
const showingEmoji = ref(emojis[currentEmoji])
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentMessage.value = (currentMessage.value + 1) % messages.value.length
  }, 2000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const floatingEmojis = ref([])

const generateEmoji = () => {
  const id = Date.now() + Math.random()
  const emoji = emojis.value[Math.floor(Math.random() * emojis.value.length)]
  const left = Math.random() * 80 + 10

  floatingEmojis.value.push({ id, emoji, left })

  setTimeout(() => {
    floatingEmojis.value = floatingEmojis.value.filter(e => e.id !== id)
  }, 2000)
}


</script>

<template>
  <div class="font-ibm bg-[#fcfaee]">
    <div class="fixed bg-[#129990] text-[#FFFBDE] flex justify-start items-center w-screen shadow-lg">
      <img src="../assets/profile.jpg" alt="Mama Ant"
        class="m-2 rounded-full w-[15vw] h-[15vw] border-2 border-[#096B68]">
      <p class="text-lg font-bold m-2">Happy BirthDay!!🎊</p>
    </div>
    <div class="h-screen">
      <div class="p-3 pt-[25vw]">
        <div class="w-[85vw] h-fit p-2 bg-[#FFFBDE] border-2 border-[#eebb43] rounded-lg">
          <img src="../assets/ant-cream-cake.jpg" alt="ant-cream-cake" class="w-fit rounded-lg">
        </div>
        <div class="w-[20vw] h-[20vw] rounded-full pt-3">
          <img src="../assets/cream.jpg" alt="Cream" class="rounded-full border-2 border-[#eebb43]">
        </div>
      </div>
      <div class="p-3 pt-5 flex flex-col items-end">
        <div class="w-fit h-fit p-2 bg-[#096B68] text-[#FFFBDE] rounded-lg">
          <p>สุขสันต์วันเกิดค่ะหม่าม้า💗</p>
        </div>
        <div class="mt-2 w-[85vw] break-words h-fit p-2 bg-[#096B68] text-[#FFFBDE] rounded-lg">
          <p class="pb-3">&nbsp;&nbsp;&nbsp;&nbsp;ขอบคุณสำหรับหนึ่งปีที่ผ่านมานะคะ ปีนี้เป็นยังไงบ้าง
            หนูหวังว่าหม่าม้าจะมีความสุขถึงแม้จะเป็นปีที่ค่อนข้างหนัก
            ขอบคุณที่พยายามเพื่อพวกหนูนะคะ ที่ผ่านมาเก่งมาก ๆ เลย🤗 </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;ครึ่งปีที่เหลือจากนี้ หนูขอให้ทุกอย่างผ่านไปได้อย่างง่ายดาย ไม่มีอุปสรรค
            ขอให้หม่าม้าพบเจอแต่เรื่องราวดี ๆ
            มีแต่ความสุข เจอปัญหาอะไรก็ขอให้แก้ไขได้ดั่งใจหวัง สุขภาพแข็งแรงทั้งกายและจิตใจ เต็มไปด้วยความโชคดี
            และขอให้ทุกวันต่อจากนี้สว่างสดใส ไม่มีเรื่องทุกข์ใจเลยนะคะ🍀</p>
        </div>
        <div class="w-[20vw] h-[20vw] rounded-full pt-3">
          <img src="../assets/cream.jpg" alt="Cream" class="rounded-full border-2 border-[#096B68]">
        </div>
      </div>
      <div class="p-3 pt-5 pb-25">
        <div class="w-fit h-fit p-2 px-4 bg-[#FFFBDE] border-2 border-[#eebb43] rounded-2xl">
          <p class="font-semibold text-[#84610f]">สุดท้ายนี้<br>ลองกดที่อีโมจิด้านล่างดูสิ!<br>(รัว ๆ เลย!!)</p>
        </div>
        <div class="w-[20vw] h-[20vw] rounded-full pt-3">
          <img src="../assets/cream.jpg" alt="Cream" class="rounded-full border-2 border-[#eebb43]">
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center bg-[#129990] h-[4rem] w-full fixed bottom-0 p-[4vw]">
      <div class="flex item-center w-[75vw] h-[2.5rem] rounded-r-full rounded-l-full bg-[#FFFBDE]">
        <p class="h-fit my-auto ml-5">{{ messages[currentMessage] }}</p>
      </div>
      <div class="h-[2.75rem] w-[2.75rem] rounded-full bg-[#eebb43] p-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFBDE"
          class="size-fit" @click="generateEmoji()">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
      </div>
    </div>
    <div v-for="e in floatingEmojis" :key="e.id" class="fixed text-5xl animate-float"
      :style="{ left: `${e.left}%`, bottom: '4rem' }">
      {{ e.emoji }}
    </div>
  </div>
</template>

<style scoped>
@keyframes floatUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
}

.animate-float {
  animation: floatUp 2s ease-out forwards;
}
</style>