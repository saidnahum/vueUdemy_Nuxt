<template>
   <div class="container mx-auto mt-4">
      <div class="border border-gray-300 rounded my-5 p-5">
         <h1 class="text-3xl font-bold mb-3">{{ articulo.title }}</h1>
         <p class="mb-3">Autor: <strong>{{ articulo.nombreAutor }}</strong></p>
         <p class="mb-3 text-justify">{{ articulo.body }}</p>

         <div class="">
         <nuxt-link to="/blog" class="text-blue-600 hover:underline mt-4">
            Atras
         </nuxt-link>
      </div>
      </div>
   </div>
</template>

<script>
// Importando axios
import axios from 'axios';

export default {
   data() {
      return {
         
      }
   },
   // async created(){
   //    try {
   //       // Petición a la API
   //       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
   //       //console.log(res.data);

   //       // Empujando respuesta de la peticion a articulo
   //       this.articulo = res.data

   //       // Peticion a la API para obtener el nombre del autor
   //       const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
   //       //console.log(resAutor);

   //       // crando propiedad nombreAutor y empujarla al articulo
   //       this.articulo.nombreAutor = resAutor.data.name
   //       console.log(this.articulo);
   //    } catch (error) {
   //       console.log(error);
   //    }
   // },
   async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      try {
         // Petición a la API
         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

         // creando el array de articulo para empujar respuesta de peticion
         const articulo = res.data

         // Peticion a la API para obtener el nombre del autor
         const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
         //console.log(resAutor);

         // crando propiedad nombreAutor y empujarla al articulo
         articulo.nombreAutor = resAutor.data.name

         return {articulo}
         
      } catch (error) {
         console.log(error);
         return {error: error}
      }
   },
}
</script>
