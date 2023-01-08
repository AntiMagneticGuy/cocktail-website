<script>
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            routes: [
                { desc: "home1", link: "/" },
                { desc: "home2", link: "/" },
                { desc: "home3", link: "/" },
            ]
        }
    }
}
</script>

<template>
<nav>
    
<ul>
    <li style="float: left; background-color: #c0bebe;">Filips side (tm)</li>
    <li v-for="item in this.routes"><RouterLink :to="item.link" class="route" > {{ item.desc }}</RouterLink></li>
</ul>

</nav>

</template>

<style scoped>


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

    background-color: rgb(163, 157, 157);
} 
.active{
    background-color: aquamarine;
}
</style>