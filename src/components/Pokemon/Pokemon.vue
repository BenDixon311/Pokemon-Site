<template>
<div id="app">
    <v-app id="inspire" dark>
        <v-layout justify-center>
            <v-flex xs12 sm3>
                <br><br><br><br><br><br><br><br>
               <v-card>
                   <transition name="slide" appear>
                <v-img 
                class="white--text"
                :src="picture"
                height = "500px"
                width = "500px"
               ></v-img>
                </transition>
        

            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline text-capitalize">{{ name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
                 

            <v-card-title>
            <div>
              <span class="grey--text display-3">Type</span><br>
              <span class="text-capitalize display-2">{{ type1 }}</span><br>
              <span class="text-capitalize display-2">{{ type2 }}</span>
            </div>
          </v-card-title>

          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn to = '/PokemonDetails' flat>Learn More</v-btn>
              <v-btn to = '/' flat color="green">Search Again</v-btn>

          </v-card-actions>
               </v-card>
            </v-flex>
        </v-layout>
    </v-app>    
    </div>
</template>


<script>
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            picture: "",
            type1: "",
            type2: ""
            
        }
    },

    computed: {
        pokeNum() {
            return this.$store.state.userInput;
        }
    },

    created() {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.$store.state.userInput + '/')
        .then (response => {
            this.name = response.data.forms[0].name;
            this.picture = response.data.sprites.front_default;
            this.type1 = response.data.types[0].type.name;
            if (response.data.types[1].type.name != null){
            this.type2 = response.data.types[1].type.name;}
        }).catch(err => {
            console.log(err);
        })
    }

    

        
    }
    

</script>
