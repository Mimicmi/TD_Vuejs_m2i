<template>
    <!--zone html-->
    <h1 class="w3-animate-left w3-padding-16 w3-center">Shop</h1>
    <Product />
</template>

<script>
    import Product from "../components/Product";
    export default {
        name: 'Shop',
        components: {Product},
        data() {
            return {
                title: "Shop component title",
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped>
    /*zone css, le scoped mets le css QUE pour ce composant*/

</style>