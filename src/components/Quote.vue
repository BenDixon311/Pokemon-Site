<template>
<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default"></div>
        <div class="panel-body quote"></div>
        <slot></slot>
</div>


    
</template>

<script>
</script>

<style>
    .panel-body {
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: purple;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: red;
    }
</style>