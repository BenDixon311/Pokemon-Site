<template>
  <div id="app">
    <app-header></app-header>
      
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
  export default {
  
    components: {
      appHeader: Header
    },
    // methods: {
    //   submit() {
    //     this.$http.post('https://vuejs-http-35f6d.firebaseio.com/data.json', this.user)
    //       .then(response=> {
    //         console.log(response);
    //       },
    //       error=> {
    //         console.log;
    //       }
    //       );
    //   },
    //   fetchData() {
      
    //     this.$http.get('https://vuejs-http-35f6d.firebaseio.com/data.json')
    //       .then(response => {
    //         return response.json();
            
            
    //       }).then(data => {
    //           const resultArray=[];
    //           for(let key in data) {
    //             resultArray.push(data[key]);
    //           }
    //         this.users = resultArray;
    //       });
          
    //   }
    // }
  }
</script>