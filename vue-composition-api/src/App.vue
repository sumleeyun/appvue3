<template>
  <div>
    <h1>{{ Title }}</h1>
    <p>{{ desc }}</p>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">up</button>
    <button @click="decrement">down</button>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';  

 
    const Title: String = "Vue 3";
    const desc: String = "This is a Vue 3 App";
    const counter: Number = ref(0);
    //สร้างฟังก์ชั่น และส่งค่าไปยังหน้าเว็บ
    // function increment() {
    //   counter.value ++;
    // }

    // function decrement() {
    //   counter.value --;
    // }

    // arrow function
const increment = () => { counter.value ++; } 
const decrement = () => { counter.value>0?counter.value --:0; }



    

</script>

<style lang="scss" scoped></style>
