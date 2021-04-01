<template>
  <v-card elevation="0" tile style="box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .25) !important;">
    <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" hide-details />
      <v-spacer />
      <v-btn color="primary">
        <v-icon left size="20">mdi-plus</v-icon>
        <span>add contact</span>  
      </v-btn>
    </v-card-title>  
    <v-card-text>
      <v-data-table height="372" :headers="headers" :items="items" :search="search" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
        <template v-slot:item.sno="{ item }">
          <v-chip outlined small class="caption font-weight-bold"> {{ getSNO(item) + 1 }}</v-chip>
        </template>
        <template v-slot:item.name="{ item }">
          <div class="d-flex align-center my-2">
            <v-avatar>
              <v-img :src="item.img ? item.img : `https://image.tmdb.org/t/p/original/${item.poster_path}`" 
                :lazy-src="item.img ? item.img : `https://image.tmdb.org/t/p/original/${item.poster_path}`" 
                :alt="item.name ? item.name : item.original_title" />  
            </v-avatar>
            <div class="ml-2">
              <div style="font-size: 16px; font-weight: 500; line-height: 1;">{{ item.name ? item.name : item.original_title }}</div>  
              <div class="caption grey--text mt-1" style="line-height: 1;">{{ item.email ? item.email : item.original_title }}</div>  
            </div>  
          </div>
        </template>
        <template v-slot:item.date="{ item }">
          <v-icon color="black">mdi-calendar</v-icon>
          <span class="caption grey--text ml-1">{{ item.date ? item.date : item.release_date }}</span>
        </template>
        <template v-slot:item.vote_average="{ item }">
          <v-chip small color="amber" label text-color="white">
            <v-icon left size="20"> mdi-star </v-icon>
            {{ item.vote_average }}
          </v-chip>
        </template>
        <template v-slot:item.vote_count="{ item }">
          <v-chip outlined small class="caption font-weight-bold"> {{ item.vote_count }}</v-chip>
        </template>
        <template v-slot:item.address="{ item }">
          <v-icon color="black">mdi-map-marker</v-icon>
          <span class="caption grey--text ml-1">{{ item.address }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon v-for="(a, i) in actions" :key="i" :color="a.color" @click="a.name == 'View' ? viewPage(item) : item.name == 'Edit' ? editPage(item) : deleteItem(item)">
            <v-icon small>{{ a.icon }}</v-icon>
          </v-btn> 
        </template>
      </v-data-table>  
    </v-card-text>
    <div class="text-center pb-3">
      <v-pagination v-model="page" :length="pageCount" />
    </div>  
  </v-card>  
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: {
    headers: Array,
    items: Array,
    actions: Array
  },
  data: () => ({
    search: '',  
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,  
  }) ,
  methods: {
    getSNO(user) {
      return this.items.indexOf(user)  
    },
    viewPage(item) {
      console.log(item)
      console.log('view page')
    },
    editPage(item) {
      console.log(item)
      console.log('edit page')
    },
    deleteItem(item) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.items.splice(this.items.indexOf(item), 1)
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    }
  } 
}
</script>