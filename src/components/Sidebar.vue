<template>
  <v-navigation-drawer v-model="drawer" app stateless color="primary" dark :mini-variant="deviceType" mobile-breakpoint="960">
    <v-card height="125" class="transparent d-flex flex-column justify-center align-center" tile elevation='0'>
      <v-card-title class="white--text" style="font-size: 32px; letter-spacing: .5px;">EVENTOO</v-card-title>  
    </v-card>
    <v-list dense nav expand tile>
      <v-list-item v-for="(item, i) in items" :key="i" link :to="`${item.to}`" flat>
        <v-list-item-icon class="pl-sm-3">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content style="font-size: 13px; letter-spacing: .5px;">{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn :block="!deviceType" :icon="deviceType" large class="white primary--text" @click="logout">
          <v-icon :left="!deviceType" size="20">mdi-logout</v-icon>
          <span v-show="!deviceType">logout</span>  
        </v-btn>
      </div>
    </template>

  </v-navigation-drawer>
</template>

<script>
export default {
  data : () => ({
    drawer: true,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Movies', icon: 'mdi-calendar', to: '/movies' },
      { title: 'Users', icon: 'mdi-account-multiple', to: '/users' },
      { title: 'Table Clone', icon: 'mdi-content-copy', to: '/table-clone' },
      { title: 'Notifications', icon: 'mdi-bell', to: '/notifications' },
      { title: 'Profile', icon: 'mdi-account', to: '/profile' },
      { title: 'Settings', icon: 'mdi-help-box', to: '/settings' },
    ],
    right: null,  
  }),
  methods: {
    logout() {
      console.log('logged out')  
    }  
  },  
  computed: {
    deviceType() {
      return this.$vuetify.breakpoint.name == 'xs' ? true : false
    }
  }
}
</script>
