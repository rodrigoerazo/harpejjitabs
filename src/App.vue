<template>
    <div id="app">
        <Toolsbar></Toolsbar>
        <div id="main">
            <Tablature class="tablature"></Tablature>
        </div>
        <Contextual></Contextual>
        <div id="hidden">
            <input type="file" name="loadFile" id="loadFile">
        </div>
    </div>
</template>

<script>
    import Tablature from './components/Tablature.vue'
    import Toolsbar from './components/Toolsbar.vue'
    import Contextual from "./components/Contextual.vue";
    import Testing from './components/Testing.vue'

    export default {
        name: 'App',
        components: {
            Testing,
            Contextual,
            Tablature,
            Toolsbar,
            Testing
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #main {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        /*padding-top: 10px;*/
    }



    body, html {
        background-color: #eee !important;
        margin: 0;
        padding: 0;
    }

    #hidden {
        width: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;
    }

</style>
