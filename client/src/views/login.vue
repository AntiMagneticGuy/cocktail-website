<template>
    <br />
<h3>{{this.signUp ? "Register" : "Login"}}</h3>


<form @submit.prevent="loginUser" method="post" v-if="!signUp">
   <label for="email"> email: <input type="email" id="email" name="email" v-model="login.email"></label> <br />
    <label for="password"> Password: <input type="password" id="password" name="password" v-model="login.password"> </label><br />
 <button type="submit">Sign in</button>
</form>

<form @submit.prevent="registerAcc" method="post" v-else>
<label for="email"> email: <input type="text" id="email" name="email" v-model="register.email"></label> <br />
<label for="userName"> username: <input type="text" id="userName" name="userName" v-model="register.userName"></label> <br />
<label for="password"> Password: <input type="password" id="password" name="password" v-model="register.password">
</label><br />
<button type="submit">Sign in</button>

</form>

<br>
<br>
<p>{{!this.signUp ? "No account?" : "Have an account?"}} <u style="color: blue" @click="signUp = !signUp">{{!this.signUp ? "Register" : "Login"}}</u></p>


</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            signUp: false,
            login: {
                email: "",
                password: "",
            },
            register: {
                email: "",
                userName: "",
                password: "",

            }
        }
    },
    methods: {
        async loginUser(){
            try  {
                await axios.post('/node/login', this.login)
                .then((res) => {
                    let token = res.data.token;
                    //console.log(token);
                    localStorage.setItem("user", token);
                    this.$emit("login");
                    this.$router.push("/");
                }).catch((err) => {
                    console.log(err);
                });


            } catch (err) {
                console.log(err);
            }

        },
        async registerAcc(){
            try {
                await axios.post('/node/register', this.register)
                    .then((res) => {
                        let token = res.data.token;
                        
                        localStorage.setItem("user", token);
                        this.$emit("login");
                        this.$router.push("/");
                    }).catch((err) => {
                        console.log(err);
                    });
            } catch (err) {
                console.log(err);
            }
        }
    }

}


</script>
