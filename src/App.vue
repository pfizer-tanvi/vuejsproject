<template>
<h1>Leave Management </h1>
  <div id="nav">
  
  <p>
    <router-link to="/" class="active">Home</router-link> 
    <router-link :to="{name:'leaverequest'}" class="active">Leave Request</router-link> 
    <router-link :to="{name:'report'}" class="active">Report</router-link> 
    <router-link :to="{name:'configuration'}" class="active">Configuration</router-link> 
    <router-link :to="{name:'userguide'}" class="active">Userguide</router-link> 
    </p>
  </div>
  <router-view/>
</template>

<style>
.active{
    border: none;
    outline: none;
    padding: 10px 16px;
    background-color: #f1f1f1;
    cursor: pointer;
    margin:5px 5px 5px 5px;
    color :#009879;
}
 .exact-active{
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color:#009879;
  cursor: pointer;
  margin:5px 5px 5px 5px;
  color: #ffffff;
  }

</style>