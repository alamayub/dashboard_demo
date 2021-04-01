<template>
  <v-app-bar app color="primary" dark elevate-on-scroll>
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon text>
      <v-icon size="20">mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon text>
      <v-icon size="20">mdi-bell</v-icon>
    </v-btn>
    <v-btn icon text>
      <v-icon size="20">mdi-account</v-icon>
    </v-btn>
  </v-app-bar>  
</template>