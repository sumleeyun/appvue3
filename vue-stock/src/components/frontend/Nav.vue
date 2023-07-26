<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand" to="/">Langing</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">เมนู</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">เมนูยอดฮิต </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">เกียวกับเรา </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">ผลงาน </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">บริการ </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">ติดต่อเรา </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">สมัครสมาชิก </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">เข้าสู่ระบบ </router-link>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> -->
          <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> -->
        <!-- </li> -->
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>