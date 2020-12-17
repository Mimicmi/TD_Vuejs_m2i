<template>
    <div>COMPONENT PRODUCT WORKING</div>
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
                        name: "Baby Yoda",
                        price: 10,
                        image: "assets/baby_yoda.jpeg",
                        stock: 1
                    },
                    {
                        name: "Sabre laser",
                        price: 25,
                        image: "assets/sabre_laser.jpeg",
                        stock: 5
                    },
                    {
                        name: "Blaster",
                        price: 15,
                        image: "assets/blaster.jpeg",
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