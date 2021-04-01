<template>
  <v-container fluid>
    <DataTable :headers="headers" :items="movies" :actions="actions" />
  </v-container>  
</template>

<script>
import DataTable from '../components/DataTable'
import axios from 'axios'
export default {
  components: {
    DataTable
  },
  data: () => ({
    headers: [
      { text: 'S.No', align: 'start', value: 'sno' },
      { text: 'Movie', value: 'name' },
      { text: 'Release Date', value: 'date' },
      { text: 'Rating', value: 'vote_average' },
      { text: 'Vote Count', value: 'vote_count' },
      { text: 'Actions', value: 'actions' },
    ],  
    movies: [],
    actions: [
      { name: 'View', icon: 'mdi-eye', color: 'primary' },
      { name: 'Edit', icon: 'mdi-pencil', color: 'success' },
      { name: 'Delete', icon: 'mdi-delete', color: 'red' }
    ]
  }),
  created() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=add0b3dd2f97f0d1b15f491aa82b0aea&language=en-US&page=1').then((response) => {
      this.movies = response.data.results
      console.log(response.data.results)
    }).catch( e => console.log(e) )
  }
}
</script>