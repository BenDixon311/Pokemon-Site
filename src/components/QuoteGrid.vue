<template>

    

   

    <v-layout row wrap>
        <v-flex xs3 v-for="player in players" :key="player.playerId">
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{player.lastName}}, {{player.firstName}}</h3>
                    </div>
                </v-card-title>
            </v-card>
            

        </v-flex>
    </v-layout>




    
</template>

<script>
import Quote from './Quote.vue';
import { players } from '../assets/players';
export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },

    methods: {
        
    }
}
</script>

<style>

</style>
