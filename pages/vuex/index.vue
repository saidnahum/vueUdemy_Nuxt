<template>
   <div class="container mx-auto mt-4">
      <h1 class="text-3xl font-bold">Vuex</h1>
   </div>
</template>

<script>
// Importación de la db de firestore
import { db } from '@/plugins/firebase.js';

export default {
   created(){
      // Llamado de la colección tareas de la DB firestore
      db.collection('tareas').get()
         .then(query => {
            query.forEach(element => {
               console.log(element.data());
            });
         })
   }
}
</script>