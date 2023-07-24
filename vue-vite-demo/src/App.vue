<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
  
 
</template>

<script lang="ts">
    import Navbar from'./components/Navbar.vue';

    
export default {
    components:{
        Navbar
        
    },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
