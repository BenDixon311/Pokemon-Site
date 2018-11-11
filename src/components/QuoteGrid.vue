<template>
<div class="row">
    <app-quote v-for="quote in quotes">{{ quote }}</app-quote>

    <app-quote></app-quote>

</div>


    
</template>

<script>
import Quote from './Quote.vue';
export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },

    methods: {
        getplayer() {
            
        }
    }
}
</script>

<style>

</style>
