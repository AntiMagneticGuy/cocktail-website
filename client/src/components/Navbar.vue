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
        }
    }
}
</script>

<template>
<nav>
    
<ul>
    <li style="float: left; background-color: #c0bebe;">Filips side (tm)</li>
    <li v-for="item in routes">
        <RouterLink :to="item.path" class="route" v-if="!(item.auth)"> {{ item.name }}</RouterLink>
        <a v-else :href="item.path" class="route"> {{ item.name }}</a>
    </li>
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