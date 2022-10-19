<template>
      <div class="home">
      <h3> Report </h3>
      <div>
        <label>First Name</label>
        <input type="text" v-model="fname" placeholder="Enter the First Name" />

        <label>Last Name</label>
        <input type="text" v-model="lname"  placeholder="Enter the Last Name" />

        <label>Email</label>
        <input type="text" v-model="email" placeholder="Enter the Email Name"/>

         <button @click="addItem()">Add Item</button>
    </div>
    <div style=" float: right;">
       <label>
                <input type="text" v-model="searchString" placeholder="Search...">
      </label>
    </div>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>  
        <tbody>          
          <tr v-for="item of items" :key="item.id" class="active-row">
            <td> {{ item.id }} </td> 
            <td> {{ item.fname }} </td>
            <td> {{ item.lname }} </td>
            <td> {{ item.email }} </td>
            <td>
             <button class="btn btn-danger btn-sm" @click="deleteId(item.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      </div>
</template>

<script>
import axios from "axios";
export default{
  name : "main-report",
  data(){
    return{
      items:[],
    };
},

async created(){
  const res = await axios.get('http://localhost:3000/items'); 
  this.items = res.data;
  },
methods: {
    async addItem() {
      const res = await axios.post(`http://localhost:3000/items`, {
        fname: this.fname,
        lname : this.lname,
        email : this.email,       
      });
      this.items = [...this.items, res.data];
      this.fname = "";
      this.lname = "";
      this.email = "";
    },  
    deleteId(id){
      axios.delete('http://localhost:3000/items/'+id); 
       
       this.items = this.items.filter((items) => items.id !== id);
    
    }, 
  }, 
 
};
</script>
<style>
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;    
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width:100%;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table tr,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
button {
  margin-top: 5px;
  background-color: #3498db;
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}
input {
  margin: 6px 6px 6px 6px;  
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
label {
  margin: 6px 6px 6px 6px;  
  font-size: 14px;
  font-weight:bold;
}

</style>