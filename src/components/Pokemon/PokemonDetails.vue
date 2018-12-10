<template>
    <div id="app">
    
    <v-app id="inspire" dark>
        <v-layout justify-center>
            <v-flex xs12 sm3>
                <br><br><br><br><br><br><br><br>
               <v-card>
                <v-img 
                
                class="white--text"
                :src="picture"
                height = "500px"
                width = "500px"
               >
                
        

            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline text-capitalize">{{ name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
                </v-img> 

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

            <v-flex xs12 sm3>
                <br><br><br><br><br><br><br><br>
                
                <v-card>
                    <span class="display-2 grey--text">Base Stats</span><br>
                    <span class="display-1">Speed: {{ speed }}</span><br>
                    <span class="display-1">Special Defense: {{ specialD }}</span><br>
                    <span class="display-1">Special Attack: {{ specialA }}</span><br>
                    <span class="display-1">Defense: {{ defense }}</span><br>
                    <span class="display-1">Attack: {{ attack }}</span><br>
                    <span class="display-1">HP: {{ hp }}</span><br>

                    <v-card-actions>
                        <v-btn v-shiny="clicked">View Shiny</v-btn>
                    </v-card-actions>
                </v-card>

              
            </v-flex>
        </v-layout>
    </v-app>    
        
    </div>


</template>


<script>
import Pokemon from './Pokemon.vue';
import axios from "axios";

export default {
    data() {
        return {
            name: "",
            picture: "",
            type1: "",
            type2: "",
            speed: "",
            specialD: "",
            specialA: "",
            defense: "",
            attack: "",
            hp: "",
            shiny:"",
            reveal: false
        }
    },

    directives: {
        shiny: {
            bind(el, binding) {
                el.onclick = function () {
                    binding.value();
                }
            }
        }
    },

    methods: {
        clicked() {
            
            axios.get('https://pokeapi.co/api/v2/pokemon/' + this.$store.state.userInput + '/')
                .then (response => {
                    this.picture = response.data.sprites.front_shiny;
                }).catch(err => {
                    console.log(err);
                });

                this.reveal = true;

              


           
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

            this.speed = response.data.stats[0].base_stat;
            this.specialD = response.data.stats[1].base_stat;
            this.specialA = response.data.stats[2].base_stat;
            this.defense = response.data.stats[3].base_stat;
            this.attack = response.data.stats[4].base_stat;
            this.hp = response.data.stats[5].base_stat;

            this.type2 = response.data.types[1].type.name;

        }).catch(err => {
            console.log(err);
        })
    }
}
</script>

<style>



</style>
