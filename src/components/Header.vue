<template>
    <div class="container">
        <transition name="fade">
            <img :src="image[index].src" alt="header">
        </transition>
        <div class="centered w3-border w3-display-center w3-text-white w3-padding-16" style="background-color:black">The place to be for your Vinyl</div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                count: 0,
                index: 0,
                image: [{
                    src: require("../assets/musique_header.jpg")
                },
                {
                    src: require("../assets/chill_music.jpg")
                }
                ],
            }
        },
        mounted() {
            setInterval( () => {
                if (this.index < this.image.length - 1) {
                    this.index++
                } else {
                    this.index = 0
                }
                this.count++
            }, 4000);
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
    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>