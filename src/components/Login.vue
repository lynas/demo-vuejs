<template>
    <div class="login">
        <h1>Login page</h1>
        <button @click="setSession">Set</button>
        <button @click="setSessionNull">Set null</button>
        <button @click="getSession">Get</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        methods: {
            setSession(){
                this.$session.set("token", "tokenVal")
            },setSessionNull(){
                this.$session.set("token", null)
            },
            getSession(){
                alert(this.$session.get("token"))
            }
        }
    }
</script>
<style scoped>
</style>
