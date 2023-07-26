<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="handleSubmit" class="my-4">
          <h2 class="mb-4">Login</h2>
          <div class="form-floating mb-3">
            <input
              type="text"
            :class="{'is-invalid': v$.email.$error.length}"
              class="form-control"
              id="email"
              v-model="fromData.email"
              placeholder="username"
            />
            <label for="email">Email</label>
            <div v-for="error of v$.email.$errors" :key="error.$uid">
              <div class="text-danger my-2"> {{ error.$message }}</div>
          </div>
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
          <button type="submit" class="btn btn-primary" :disabled="loading" > {{ loading ?'กำลังบันทึกข้อมูล':'login' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import Swal from "sweetalert2";

// Import Auth Service
import http from "../../services/AuthService";

//use vuelidate
const fromData = ref({
  email: "",
  password: "",
});

// สร้างตัวแปล loading default = false
const loading = ref(false);

//กำหนดเงือนไข
const rules = {
  email: {
    required: helpers.withMessage("กรุณากรอกอีเมล์", required),
    email: helpers.withMessage("กรุณากรอกอีเมล์ให้ถูกต้อง", email),
  },
  password: {
    required: helpers.withMessage("กรุณากรอกรหัสผ่าน", required),
    minLength: helpers.withMessage(
      "กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร",
      minLength(6)
    ),
  },
};

//กำหนดค่าเริ่มต้น vuelidate

const v$ = useVuelidate(rules, fromData);


const handleSubmit = () => {
   
    v$.value.$touch();
  if (!v$.value.$error) {
    Swal.fire({
      title: "Error!",
      text: "กรอกข้อมูลให้ครบ",
      icon: "error",
      confirmButtonText: "Cancel",
    });
  } else {

     //เปิดสถานะ loading
     loading.value = true;
    // console.log(fromData.value);
    // เลือกใช้งาน Auth Service
    http
      .post("login", {
        email: fromData.value.email,
        password: fromData.value.password,
      })
      .then((response) => {
        //ปิดสถานะ loading
        loading.value = false;

        console.log(response.data);
        Swal.fire("เข้าสู่ระบบสำเร็จ", "ยินดีต้อนรับ", "success");
        localStorage.setItem("user", JSON.stringify(response.data));
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("firstName", response.data.firstname);
        // localStorage.setItem("lastName", response.data.lastName);
        // localStorage.setItem("username", response.data.username);
        // localStorage.setItem("image", response.data.image);
        //ส่งไปหน้า  profile
        //router.push({ path: "/profile" });

        window.location.href = "/backend/dashboard"; // ใช้ได้แต่ไม่ดีเท่ากับ router.push({ path: "/profile" });
      })
      .catch((error) => {
        //ปิดสถานะ loading
        loading.value = false;
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
