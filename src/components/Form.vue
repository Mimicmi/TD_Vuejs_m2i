<template>
    <div class="w3-container w3-content w3-padding-16" style="max-width: 800px" id="contact">
        <h2 class="w3-wide w3-center w3-animate-left">Nous contacter</h2>
        <div class="w3-col m6 w3-large w3-margin-bottom">
            <i class="fa fa-map-marker" style="width:30px"></i> Lyon, FRANCE<br>
            <i class="fa fa-phone" style="width:30px"></i> Téléphone: (+33)7 XX XX XX<br>
            <i class="fa fa-envelope" style="width:30px"> </i> Email: faux@fauxmail.com<br>
        </div>
        <div class="w-col m6">
            <form target="_blank">
                <div class="w3-row-padding" style="margin:0">
                    <div class="w3-half">
                        <input class="w3-input w3-border" type="text" placeholder="Name" required="Name">
                    </div>
                    <div class="w3-half">
                        <input class="w3-input w3-border" type="text" placeholder="Email" required="Email">
                    </div>
                    <div class="w3-half">
                        <input class="w3-input w3-border" type="text" placeholder="Message" required="Message">
                    </div>
                    <button class="w3-button w3-black w3-section w3-right" type="submit">Envoyer</button>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>