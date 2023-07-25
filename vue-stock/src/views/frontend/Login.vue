<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit" class="my-4">
          <h2 class="mb-4">Login</h2>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="fromData.username"
              placeholder="username"
            />
            <label for="username">username</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="fromData.password"
              placeholder="Password"
            />
            <label for="password">Password</label>
          </div>
          <input type="submit" class="btn btn-primary" value="login" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import Swal from "sweetalert2";

// Import Auth Service
import  http from "../../services/AuthService";

//use vuelidate
const fromData = ref({
  email: "",
  password: "",
});

// const v$ = useVuelidate({
//   fromData: {
//     username: { required, email },
//     password: { required, minLength: minLength(6) },
//   },
// });

const handleSubmit = () => {
  if (fromData.value.username === "" || fromData.value.password === "") {
    Swal.fire({
      title: "Error!",
      text: "กรอกข้อมูลให้ครบ",
      icon: "error",
      confirmButtonText: "Cancel",
    });
  } else {
    // console.log(fromData.value);
    // เลือกใช้งาน Auth Service
    http
      .post("login", {
        username: fromData.value.username,
        password: fromData.value.password,
      })
      .then((response) => {
        console.log(response.data);
        Swal.fire("เข้าสู่ระบบสำเร็จ","ยินดีต้อนรับ","success");
        localStorage.setItem("user", JSON.stringify(response.data));
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("firstName", response.data.firstname);
        // localStorage.setItem("lastName", response.data.lastName);
        // localStorage.setItem("username", response.data.username);
        // localStorage.setItem("image", response.data.image);
        //ส่งไปหน้า  profile
        //router.push({ path: "/profile" });
        
        window.location.href = "/profile"  // ใช้ได้แต่ไม่ดีเท่ากับ router.push({ path: "/profile" });

      })
      .catch((error) => {
        console.log("error", error);
        Swal.fire({
          title: "Error!",
          text: "รหัสผ่านไม่ถูกต้อง",
          icon: "error",
        });
      });
  }
};
</script>

<style scoped></style>
