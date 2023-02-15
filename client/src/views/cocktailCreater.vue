<template>
    <div class="cen">
    <h1>Add Cocktail:</h1>
    
        <fieldset>
    <form action="/api/create" method="post">
        <label for="name">Name: <input type="text" name="name" id="name"></label>
        <label for="ingr">Ingredients: <textarea name="ingr" id="ingr" placeholder="2cl vodka
4cl gin..." rows="5" cols="20"></textarea></label>


    </form>
    </fieldset>
    </div>


</template>

<script>
var textAreas = document.getElementsByTagName('textarea');

Array.prototype.forEach.call(textAreas, function (elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});
</script>

 props: {
        cName: String,
        cIngr: Array,
        desc: String,
        rating: 0,
        imgPath: "",
        },


<style scoped>
.cen {
    text-align: center;
    
}


div {
    padding: 20px;
    
}

fieldset{
        padding: 20px;
        border-color: 1px solid black;
        border-radius: 2px;
        
        width: 15%;
        margin: auto;
            
}
</style>