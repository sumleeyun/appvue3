<template>
  

 <router-view />


</template>

<script  lang="ts">
let brand ='| Vue STOCK'

export default {
    //สามารถ watch สามารถอ่าน route ได้
  watch: {
    $route(to, any) {
      document.title = to.meta.title + brand
      
    }
  },
 
  
}
</script>

<style scoped>

</style>