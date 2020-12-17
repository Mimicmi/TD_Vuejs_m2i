<template>
    <nav>
        <ul>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i>Accueil</router-link></li>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'Shop'}">Boutique</router-link></li>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'AboutUs'}">A propos de nous</router-link></li>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'Contact'}">Nous contacter</router-link></li>
                <div class="w3-bar-item w3-padding-large w3-large w3-right">
                    <a href="#" v-on:click="displayCart = !displayCart">
                        ({{ cart.length }})
                        Panier</a>
                    <transition name="slide">
                        <div class="w3-right w3-border" v-show="displayCart">
                            <table class="w3-table w3-black">
                                <tr>
                                    <th>Produit</th>
                                    <th>Prix</th>
                                </tr>
                                <tr v-for="(product, key) in cart" :key="key">
                                    <td>{{ product.name }}</td>
                                    <td>{{ product.price }}€</td>
                                </tr>
                                <tr>
                                    <td>Code promo</td>
                                    <td><input type="text" placeholder="code promo" v-model="property"></td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <th v-if="property === 'RENDLARGENT'">{{ totalPrice }} - {{ codePromo }} = {{ totalPrice - codePromo }}€</th>
                                    <th v-else>{{ totalPrice }}€</th>
                                </tr>

                            </table>
                        </div>
                    </transition>
                </div>

        </ul>
    </nav>

    <Header>
    </Header>

    <div class="w3-container">
        <router-view @addEmit="addToCart($event)"/>
    </div>
    <Footer/>

</template>

<script>

    import Header from "./components/Header";
    import Footer from "./components/Footer";


    export default {
        name: 'App',
        components: {
            Footer,
            Header,
        },
        data() {
            return {
                cart: [],
                totalPrice: 0,
                codePromo: 5,
                property: "",
                displayCart: false
            }
        },
        methods: {
            addToCart(product){
                this.cart.push(product);
                this.totalPrice += product.price;
                this.displayCart = true;
            }
        }
    }
</script>


<style>
    @import url("https://www.w3schools.com/w3css/4/w3.css");
    @import url("https://fonts.googleapis.com/css?family=Lato");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}

    nav {
        background-color: black;
    }

    ul {
        color: white;
        display: inline-block;
    }

    li {
        display: inline-block;
        margin-right: 1em;
    }
    @keyframes slide-down{
        0%{
            transform: translateY(-1000px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .slide-enter-active{
        animation: slide-down 0.5s;
    }
    .slide-leave-active{
        animation: slide-down .5s reverse;
    }
</style>