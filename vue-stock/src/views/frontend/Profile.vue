<template>
    <div>
<h1>Profile</h1>
{{ user  }}
<button class="btn btn-danger" @click="logout">Logout</button>
    </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";

//Read localStorage

const user = JSON.parse(localStorage.getItem("user"));

// logout
const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};
</script>

<style scoped>

</style>