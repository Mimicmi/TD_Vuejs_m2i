<template>
    <div class="container">
        <slot><img :src="image" alt="header"></slot>
            <div class="centered w3-border w3-display-center w3-text-white w3-padding-16" style="background-color:black">The place to be for your Vinyl</div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                image:"/assets/musique_header.jpg"
            }
        }
    }
</script>

<style scoped>

    img {
        width: 100%
    }
    .container {
        position: relative;
        text-align: center;
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    h1 {
        color: red;
    }

</style>