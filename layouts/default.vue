<template>
   <div>
      <div class="bg-gray-800 text-white h-12 flex items-center">
         <div class="container mx-auto flex items-center justify-around">
            <h1 class="text-lg font-bold">Navbar Principal</h1>
            <div class="space-x-4">
               <nuxt-link class="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600" to="/nosotros">Nosotros</nuxt-link>
               <nuxt-link class="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600" to="/contacto">Contacto</nuxt-link>
               <nuxt-link class="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600" to="/blog">Blog</nuxt-link>
               <nuxt-link class="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600" to="/vuex">Vuex</nuxt-link>
            </div>
         </div>
      </div>
      <Nuxt />
   </div>
</template>
