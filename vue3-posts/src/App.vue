<template>
    <div v-bind:style="{backgroundImage: backImg}">
        <navbar></navbar>
        <div class="app">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/pages/Navbar";

    export default {
        data() {
            return {
                backImg: 'url("./bg.jpg")'
            }
        },

        components: {
            Navbar
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
        color: white;
    }

    .btn {
        cursor: pointer;
    }
</style>