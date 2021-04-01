<template>
  <v-container fluid>
    <table>
      <thead class="primary white--text">
        <tr>
          <th>S.No</th>  
          <th>Name</th>
          <th>Rate</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>
            <v-btn icon color="white" @click="addTr">
              <v-icon size="20">mdi-plus</v-icon>  
            </v-btn>
          </th>  
        </tr>   
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td class="font-weight-bold text-center">{{ index + 1 }}.</td>  
          <td><input type="text" v-model="row.item" placeholder="Item Name" /></td>
          <td><input type="number" v-model="row.rate" @input="calculateAmount(row)" placeholder="Rate" /></td>
          <td><input type="number" v-model="row.quantity" @input="calculateAmount(row)" placeholder="Quantity" /></td>
          <td><input type="number" v-model="row.amount" placeholder="Amount" readonly /></td>
          <td class="text-center">
            <v-btn color="red" icon @click="deleteTr(index)" v-show="rows.length > 1">
              <v-icon size="20">mdi-delete</v-icon>
            </v-btn>  
          </td>
        </tr>  
      </tbody>
      <tfoot class="text-right">
        <tr>
          <td colspan="4">Total</td>
          <td><input type="number" v-model="total" readonly placeholder="Total"></td>
        </tr>
        <tr>
          <td colspan="4">Discount</td>
          <td><input type="number" v-model="discount" @input="calculateTotal" placeholder="Discount"></td>
        </tr>
        <tr>
          <td colspan="4">TAX</td>
          <td><input type="number" v-model="tax" @input="calculateTotal" placeholder="TAX"></td>
        </tr>
        <tr>
          <td colspan="4">Grand Total</td>
          <td><input type="number" v-model="grand_total" readonly placeholder="Grand Total"></td>
        </tr>   
      </tfoot>
    </table> 
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    rows: [
      { item: '', rate: null, quantity: null, amount: null }  
    ],
    total: null,
    discount: null,
    tax: null,
    grand_total: null
  }),
  methods: {
    addTr() {
      this.rows.push({ item: '', rate: null, quantity: null, amount: null })  
    },
    deleteTr(i) {
      this.rows.splice(i, 1)  
      this.calculateTotal()
    },
    calculateAmount(row) {
      row.amount = parseFloat(row.rate ? row.rate : 0) * parseFloat(row.quantity ? row.quantity : 0)  
      this.calculateTotal()
    },
    calculateTotal() {
      this.total = 0  
      this.rows.forEach(row => {
        this.total += row.amount
      }); 
      this.calculateGrandTotal() 
    },
    calculateGrandTotal() {
      this.grand_total = parseFloat(this.total) - parseFloat(this.discount ? this.discount : 0 ) + parseFloat(this.tax ? this.tax : 0)  
    }
  }
}
</script>

<style scoped>
table { 
  text-align: start;
  font-size: 13px;  
  width: 100%;
  border-collapse: collapse; 
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .25) !important;
}
thead, table tbody tr, tfoot {
  display: table;
  width: 100%;
  table-layout: fixed;
}
tbody {
  display: block;  
  height: calc(100vh - 386px);
  overflow: auto;
}
tfoot { margin-bottom: 10px; }
th, td { padding: 6px 15px; }
table tbody tr:hover { background-color: rgba(128, 128, 128, .04); }
input {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, .25);
  outline: none; 
  padding: 6px 10px;
  transition: ease-in-out .3s; 
}
input:focus { border: 1px solid rgba(0, 0, 0, 1); }
</style>