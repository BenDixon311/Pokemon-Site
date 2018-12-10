<template>
<div id="app">
    <v-app id="inspire" dark>
        <br><br><br>
        <v-layout
      text-xs-center
      wrap
    >
        <v-flex xs12>
            
            <v-img 
             :src = "logo"
             class="my-3"
             contain
             height="200"
            ></v-img>
          
      </v-flex>

      <v-flex xs12>
          <transition name = "fade" appear>
        <h1 class="display-2 font-weight-bold mb-3" v-if = "show">
          Welcome to the Classic Pokemon Generator
        </h1>
            </transition>
        <h3 class="display-1 font-weight-light mb-3">
            Learn about the original 151 Pokemon
        </h3>
      </v-flex>
    
       <v-flex xs12 sm6 offset-sm3>
             <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="$store.state.userInput"
              label="Enter Number between 1-151"
              clearable
              type = "number"
              :rules = "[v => !!v || 'Please choose a number', v => (v && v <= 151) || 'Number must be less than 151', v => (v && v > 0) || 'Number must be greater than 0']"
            ></v-text-field>
            <v-btn
            :disabled = "!valid"
            to = "/Pokemon"
            >Submit</v-btn>

            </v-form>
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
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png",
                show: true,
                valid: true
            }
        },

        methods: {
           
        }
 
    }
</script>
    

<style>
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 2s;
}

.fade-leave {
    /* opacity: 1; */
}

.fade-leave-active {
    transition: opacity 2s;
    opacity: 0;
}


.slide-enter {
    
}

.slide-enter-active {
    animation: slide-in 2s ease-out forwards;
}

.slide-leave {

}

.slide-leave-active {
    animation: slide-out 2s ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(20px);
    }
}

</style>
