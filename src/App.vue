<template>
    <div class="container">

        <app-movie></app-movie>


        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Movie from './components/Movie.vue';
    export default {
        data: function() {
            return {
                quotes: [
                    'test quote'
                ],
                maxQuotes: 10
            }
        },
        components: {
          appQuoteGrid: QuoteGrid,
          appNewQuote: NewQuote,
          appMovie: Movie
        },
        methods: {
          newQuote(quote) {
            this.quotes.push(quote);
          }
        }
    }
</script>

<style>
</style>
