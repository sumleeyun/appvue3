<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="handleSubmit" class="my-4">
            <h2 class="mb-4">ลงทะเบียนใหม่</h2>
            <div class="form-floating mb-3">
              <input
                type="text"
              :class="{'is-invalid': v$.firstName.$error.length}"
                class="form-control"
                id="firstName"
                v-model="fromData.firstName"
                placeholder="firstName"
              />
              <label for="firstName">firstName</label>
              <div v-for="error of v$.firstName.$errors" :key="error.$uid">
                <div class="text-danger my-2"> {{ error.$message }}</div>
            </div>
              </div>
            <div class="form-floating mb-3">
              <input
                type="text"
              :class="{'is-invalid': v$.lastName.$error.length}"
                class="form-control"
                id="lastName"
                v-model="fromData.lastName"
                placeholder="lastName"
              />
              <label for="lastName">lastName</label>
              <div v-for="error of v$.lastName.$errors" :key="error.$uid">
                <div class="text-danger my-2"> {{ error.$message }}</div>
            </div>
              </div>
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
            <input type="submit" class="btn btn-primary" value="ลงทะเบียน" />
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  
  
  //กำหนดเงือนไข
  const rules = {
    firstName: {
      required: helpers.withMessage("กรุณากรอกชื่อ", required),
    },
    lastName: {
      required: helpers.withMessage("กรุณากรอกนามสกุล", required),
    },
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
      // console.log(fromData.value);
      // เลือกใช้งาน Auth Service
      http
        .post("login", {
          email: fromData.value.email,
          password: fromData.value.password,
        })
        .then((response) => {
          console.log(response.data);
          Swal.fire("เข้าสู่ระบบสำเร็จ", "ยินดีต้อนรับ", "success");
         
  
         
        })
        .catch((error) => {
          console.log("error", error);
          Swal.fire({
            title: "Error!",
            text: "ข้อมูลไม่สำเร็จ",
            icon: "error",
          });
        });
    }
  };
  </script>
  
  <style scoped></style>
  