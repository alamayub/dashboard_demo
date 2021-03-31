<template>
  <v-container fluid>
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
        <v-data-table :headers="headers" :items="users" :search="search" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
          <template v-slot:item.sno="{ item }">
            <v-chip outlined small class="caption font-weight-bold"> {{ getSNO(item) + 1 }}</v-chip>
          </template>
          <template v-slot:item.name="{ item }">
            <div class="d-flex align-center my-2">
              <v-avatar>
                <v-img :src="item.img" :lazy-src="item.img" :alt="item.name" />  
              </v-avatar>
              <div class="ml-2">
                <div style="font-size: 16px; font-weight: 500; line-height: 1;">{{ item.name }}</div>  
                <div class="caption grey--text mt-1" style="line-height: 1;">{{ item.email }}</div>  
              </div>  
            </div>
          </template>
          <template v-slot:item.date="{ item }">
            <v-icon color="black">mdi-calendar</v-icon>
            <span class="caption grey--text ml-1">{{ item.date }}</span>
          </template>
          <template v-slot:item.address="{ item }">
            <v-icon color="black">mdi-map-marker</v-icon>
            <span class="caption grey--text ml-1">{{ item.address }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <div>
              <v-btn icon @click="view(item)" color="primary">
                <v-icon small>mdi-eye</v-icon>
              </v-btn> 
              <v-btn icon @click="view(item)" color="success" class="mx-1">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn> 
              <v-btn icon @click="view(item)" color="red">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>  
            </div>
          </template>
        </v-data-table>  
      </v-card-text>
      <div class="text-center pb-3">
        <v-pagination v-model="page" :length="pageCount" />
      </div>  
    </v-card>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    search: '',  
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    headers: [
      { text: 'S.No', align: 'start', value: 'sno' },
      { text: 'User', value: 'name' },
      { text: 'Birthday', value: 'date' },
      { text: 'Address', value: 'address' },
      { text: 'Actions', value: 'actions' },
    ],  
    users: [
      { name: 'Meryem Uzerli', img: 'https://i1.wp.com/dl.img-news.com/dl/img/s0/dl/2020/09/KVDKSWUYUFR.jpg', email: 'meryemuzerli@gmail.com', date: 'August 12, 1983', address: 'Kassel, Germany' },
      { name: 'Selena Gomez', img: 'https://akns-images.eonline.com/eol_images/Entire_Site/202081/rs_1024x759-200901150447-1024--Selena-Gomez-Rare-Beauty--mp.jpg', email: 'selenagomez@gmail.com', date: 'July 22, 1992', address: 'Grand Prairie, Texas, United States' },
      { name: 'Emma Watson', img: 'https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTQzMzAxODc2MTU3MjYxMzgz%2Femma-watson_gettyimages-619546914jpg.jpg', email: 'emmawatson@gmail.com', date: 'April 15, 1990', address: 'Paris, France' },
      { name: 'Alexandra Daddario', img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexandra-daddario-16316-24-03-2017-15-00-32.jpg', email: 'alexandradaddario@gmail.com', date: 'March 16, 1986', address: 'New York, US' },
      { name: 'Duckie Thot', img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fnomanazish%2Ffiles%2F2019%2F07%2F20190723_132448.jpg', email: 'duckiethot@gmail.com', date: 'October 23, 1995', address: 'Melbourne, Australia' },
      { name: 'Charlize Theron', img: 'https://i2-prod.mirror.co.uk/incoming/article22453821.ece/ALTERNATES/s1200c/0_Charlize-Theron.jpg', email: 'charlizetheron@gmail.com', date: 'August 7, 1975', address: 'Benoni, South Africa' },
      { name: 'Angelina Jolie', img: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed67918c6ade40006ffd6db%2F0x0.jpg', email: 'angelinajolie@gmail.com', date: 'June 4, 1975', address: 'Los Angeles, California, US' },
      { name: 'Scarlett Johansson', img: 'https://www.kabiraaz.com/wp-content/uploads/2020/08/scarlett-johansson-13671719-1-402.jpg', email: 'scarlettjohansson@gmail.com', date: 'November 22, 1984', address: 'Manhattan, New York, US' },
      { name: 'Jennifer Lawrence', img: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMjgyNDgwNjIxODIzNTU5/jennifer-lawrence_gettyimages-626382596jpg.jpg', email: 'jenniferlawrence@gmail.com', date: 'August 15, 1990', address: 'Indian Hills, Kentucky, US' },
      { name: 'Emma Stone', img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/18/11/emma-stone.jpg', email: 'emmastone@gmail.com', date: 'November 6, 1988', address: 'Scottsdale, Arizona, US' },
      { name: 'Aishwarya Rai Bachchan', img: 'https://i2.cinestaan.com/image-bank/1500-1500/174001-175000/174550.jpg', email: 'aishwarya@gmail.com', date: 'November 1, 1973', address: 'Mangalore, India' },
      { name: 'Deepika Padukone', img: 'https://eskipaper.com/images/deepika-padukone-wallpaper-4.jpg', email: 'deepika@gmail.com', date:'January 5, 1986', address: 'Copenhagen, Denmark' }
    ]  
  }),
  methods: {
    getSNO(user) {
      return this.users.indexOf(user)  
    },
    view(item) {
      console.log(item)  
    }
  }
}
</script>