<template>
    <div class="login">
        <h1>Login page</h1>
        <button @click="setSession">Set</button>
        <button @click="setSessionNull">Set null</button>
        <button @click="getSession">Get</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Login',
        created: function () {
            this.sendGet()

        },
        methods: {
            setSession(){
                this.$session.set("token", "tokenVal")
            },
            setSessionNull(){
                this.$session.set("token", null)
            },
            getSession(){
                alert(this.$session.get("token"))
            },
            sendGet: function () {
                axios.get("https://api.github.com/users/lynas/repos")
                    .then(function (response) {
                        console.log(response.status);
                        console.log(response.data.length);
                    }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
<style scoped>
</style>
