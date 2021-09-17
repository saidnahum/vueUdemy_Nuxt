<template>
   <div class="container mx-auto mt-4">
      <h1 class="text-3xl font-bold">Vuex</h1>
   </div>
</template>

<script>
// Importación de la db de firestore
import { db } from '@/plugins/firebase.js';

export default {
   fetch({store}){
      return db.collection('tareas').get()
         .then(query => {
            const tareas = []
            query.forEach(element => {
               tareas.push(element.data())
            });
            return store.commit('setTareas', tareas)
         })
         .catch(function(error){
            console.log("Error obteniendo documentos: ", error);
         })
   }
}
</script>