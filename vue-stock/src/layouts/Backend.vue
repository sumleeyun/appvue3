<template>
  <NavBar />
  <div calss="container-fluid">
    <div class="row">
      <Sidebar />
      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-5 content">
       <!-- /<main class="bd-main order-1"> -->
        <router-view />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/backend/NavBar.vue";
import Sidebar from "../components/backend/Sidebar.vue";
import Footer from "../components/backend/Footer.vue";
</script>

<style scoped></style>
