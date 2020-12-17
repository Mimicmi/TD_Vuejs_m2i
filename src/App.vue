<template>
    <nav>
        <ul>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i>Accueil</router-link></li>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'Shop'}">Boutique</router-link></li>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'AboutUs'}">A propos de nous</router-link></li>
            <li class="w3-bar-item w3-button w3-padding-large"><router-link :to="{name: 'Contact'}">Nous contacter</router-link></li>
        </ul>
    </nav>

    <Header>
        <!--Mettre des slots pour chaque view-->
    </Header>

    <div class="w3-container">
        <router-view />
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
</style>