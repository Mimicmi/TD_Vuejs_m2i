<template>
    <h1 class="w3-animate-left w3-padding-16 w3-center">About Us View Working (slot)</h1>
    <AboutDetails>
        <template v-slot:about-us>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facere laboriosam nam nulla porro
                ratione suscipit tempora tempore. Aut cupiditate itaque maiores molestias, non omnis! Aperiam fugiat in
                non totam.
            </div>
            <br>
            <div>Aspernatur autem eius nihil possimus totam. Adipisci aperiam atque, aut consequatur culpa delectus
                dolorum est excepturi laboriosam libero molestiae, necessitatibus pariatur quam quia rem repellat,
                repellendus sed temporibus ut vel.
            </div>
            <br>
            <div>Ab adipisci, alias at deserunt dolores dolorum ducimus eligendi ex facilis in magni nostrum omnis rem
                repudiandae sint. Aspernatur, aut cumque cupiditate impedit incidunt iure nihil omnis pariatur quidem
                vitae.
            </div>
            <br>
            <div>Aliquid, animi atque consequuntur cum esse eum, eveniet fugit illum ipsam magni necessitatibus
                obcaecati quasi quidem sed similique velit voluptatibus? Aliquid, consequuntur deserunt ipsum labore
                praesentium recusandae repellat ullam veniam.
            </div>
            <br>
        </template>
    </AboutDetails>

    <!--insert slot here-->
</template>

<script>
    export default {
        name: 'AboutUs',
        data() {
            return {
                title: "About us",
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped>

</style>