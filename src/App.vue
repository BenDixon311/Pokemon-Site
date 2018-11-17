<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>NBA Stats</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <div class="form-group">
              <label>Username</label>
              <input class="form-control" type="text" v-model="user.username">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" v-model="user.email">
            </div>
            <button class="btn btn-primary" @click="submit">Submit</button>

            <button class="btn btn-primary" @click="fetchData">Get Data</button>
            <ul class="list-group">
              <li class=list-group-item v-for="u in users"> {{u.username}} - {{u.email}}</li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
       
      }
    },
    methods: {
      submit() {
        this.$http.post('https://vuejs-http-35f6d.firebaseio.com/data.json', this.user)
          .then(response=> {
            console.log(response);
          },
          error=> {
            console.log;
          }
          );
      },
      fetchData() {
      
        this.$http.get('https://vuejs-http-35f6d.firebaseio.com/data.json')
          .then(response => {
            return response.json();
            
            
          }).then(data => {
              const resultArray=[];
              for(let key in data) {
                resultArray.push(data[key]);
              }
            this.users = resultArray;
          });
          
      }
    }
  }
</script>