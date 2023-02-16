<template>
<h3>Login</h3>

<form @submit.prevent="loginUser" method="post">
   <label for="email"> email: <input type="text" id="email" name="email" v-model="login.email"></label>
    <label for="password"> <input type="password" id="password" name="password"> </label>

</form>

<br>
<br>
<p>No account? <a @click="signUp = !signUp">Sign Up</a></p>


</template>

<script>

export default{
    data(){
        return{
            signUp: false,
            login: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
        async loginUser(){
            try  {
            let res = await this.$http.post("/node/login", this.login);
            let token = response.data.token;
            localStorage.setItem("user", token);
            //this.$router.
            } catch (err) {
                console.log(err.response);
            }

        }
    }

}


</script>
