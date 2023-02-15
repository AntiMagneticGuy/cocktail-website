<template>
    <div class="cen">
<h1 >Welcome to the cocktail website!</h1>
<form action="." method="get">
    <label>Search for cocktails: <input type="search" name="query" id="searchBar" placeholder="search..."></label>
    <input type="submit" value="Search">
</form>
</div>
<div v-for="cock in cocktails" class="cocktailClass">
<Cocktail v-bind="cock"></Cocktail>
</div>
</template>


<script>
import Cocktail from '../components/Cocktail.vue'
export default{
    data() {
        return {
        cocktails: [
            {cName: "Blue Lagoon", desc: "Blue cocktail", rating: 7, imgPath: "https://bakeitwithlove.com/wp-content/uploads/2022/08/Blue-Lagoon-Cocktail-sq.jpg"},
            { cName: "Sex on the Beach", desc: "fersken", rating: 9, imgPath: "https://realhousemoms.com/wp-content/uploads/Sex-on-the-Beach-RECIPE-CARD.jpg"},
            
        ],
        }
    },

    components: {
        Cocktail,
    }

}



</script>

<style scoped>
.cen {
    text-align: center;
}
div{
    padding: 20px;
    
}
.cocktailClass{
    width: 20%;
    float: left;
}
</style>