<template>
    <div class="cocktail">
        <header>
            <h3>{{ cName }}</h3>
            <p>Rating: {{ rating }} / 10</p>
        </header>
        <div class="info">
        <img :src="imgPath" width="250" height="250">
        <p>{{ desc }}</p>
        <p><i>{{ cIngr }}</i></p>
        </div>
    </div>

</template>


<script>

export default{
    props: {
        cName: String,
        cIngr: Array,
        desc: String,
        rating: 0,
        imgPath: "",
        },

}

</script>

<style scoped>
.cocktail{
    border: 3px solid black;
    padding: 20px;
    
}
.info {
    border: 1px solid black;
    padding: 10px;
}
</style>