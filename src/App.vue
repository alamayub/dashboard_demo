<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default {
  name: 'App',

  components: {
    Navbar, Sidebar
  },

  data: () => ({
    //
  }),
};
</script>
