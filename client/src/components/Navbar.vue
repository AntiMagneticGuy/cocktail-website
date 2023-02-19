<script>
import { RouterLink } from 'vue-router'
import {rList} from '../router/index.js'

export default {
    // data() {
    //     return {
    //         routes: [
    //             { name: "HOME", path: "/" },
    //             { name: "ADD COCKTAIL", path: "/create" },
    //             { name: "3rd", path: "/asd" },
    //         ]
    //     }
    // }
    // props: {
    //     routes: { type: Object, required: true}
    // }

    data() {
        return {
            routes: rList,
            loggedIn: false
        }
    },
    mounted() {
            if (!(localStorage.getItem("user") === null)){ // logged in
                this.routes = this.routes.filter((obj) => {
                    return (obj.name != "login" && obj.name != "logout")
                });
                
                this.loggedIn = true;
                
            }
            else{
                this.routes = this.routes.filter((obj) => {
                    return (obj.name != "logout")
                });
            }

        },
        methods:{
            logout(){
                localStorage.removeItem("user");
                this.$emit("logout");
                //this.$router.push("/logout");
            }
        }
    }


//<a v-else :href="item.path" class="route"> {{ item.name }}</a>
//v-if="!(item.auth)"
</script>

<template>
<nav>
    
<ul>
    <li style="float: left; background-color: #c0bebe;">Filips side (tm)</li>
    <li v-for="item in routes">
        <RouterLink :to="item.path" class="route" > {{ item.name }}</RouterLink>
    </li>
   <li v-if="loggedIn" class="route"  @click="logout"><RouterLink to="/logout"> Logout </RouterLink></li>
</ul>

</nav>

</template>

<style scoped>
li:has(> .router-link-active) {
    background-color: aquamarine;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #c0bebe;

    position: fixed; 
     top: 0;
    width: 100%;

    border-bottom: 2px solid black;
}

li {
    float: right;
    border-right: 3px solid #bbb;
    display: inline;

   display: block;
    padding: 8px;
    background-color: #dddddd;

    /*background-color: rgb(163, 157, 157);*/
} 
.active{
    background-color: aquamarine;
}
</style>