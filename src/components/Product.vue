<template>
    <div class="w3-container w3-center">
        <div class="w3-row-padding">
            <div class="w3-col l4 m6 w3-padding">
                <div v-for="(product, key) in products" :key="key">
                    <div class="w3-container w3-center w3-border">
                        <img :src="product.image">
                        <h1>{{ product.name }}</h1>
                        <h5>{{ product.price }}€</h5>
                        <p v-if="product.stock == '0'">PRODUIT INDISPONIBLE</p>
                        <p v-else><strong>{{ product.stock }}</strong> en stocks</p>
                        <p><button class="w3-black w3-round-xxlarge" v-on:click="addToCart(product)">Ajouter au panier</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        title: 'Product',
        data() {
            return {
                products: [
                    {
                        name: "Amani Picci - Keeper",
                        price: 9,
                        image: require("../assets/pochette1.jpeg"),
                        stock: 1
                    },
                    {
                        name: "The Weeknd - Starboy",
                        price: 25,
                        image: require("../assets/pochette2.jpeg"),
                        stock: 5
                    },
                    {
                        name: "Vitalic - Voyager",
                        price: 15,
                        image: require("../assets/pochette3.jpeg"),
                        stock: 8
                    },
                ],
                cart: [],
                totalPrice: 0,
                codePromo: 5,
                property: "",
                displayCart: false
            }
        },
        methods: {
            addToCart(product) {
                this.$emit("addEmit", product)
            }
        }
    }
</script>

<style>

</style>