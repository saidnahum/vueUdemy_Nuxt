<template>
   <div class="container mx-auto mt-4">
      <h1 class="text-3xl font-bold">Blog</h1>

      <!-- Pintando datos del array de artículos -->
      <div v-for="articulo in articulos" :key="articulo.id" class="border border-gray-300 rounded my-5 p-5">
         <h1 class="text-3xl font-bold mb-3">
            <nuxt-link class="text-blue-600" :to="`/blog/${articulo.id}`">
               {{ articulo.id }}.- {{ articulo.title }}
            </nuxt-link>
         </h1>
         <p class="mb-3 text-justify">{{ articulo.body }}</p>
      </div>
   </div>
</template>

<script>
//importar axios
import axios from 'axios';

export default {
   data() {
      return {
         //  Crear array para contener la información
         articulos: []
      }
   },
   async created(){
      try {
         // Petición a la API
         const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
         //console.log(res.data);

         // Empujando la data de la API al array de articulos[] vacío
         this.articulos = res.data
      } catch (error) {
         console.log(error);
      }
   }
}
</script>
