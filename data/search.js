import recipes from './recipes.js'
////////////////////////////////////////////////////////////////////////////////////////////////

/*const searchRecipe = document.getElementById('recipe-search')

searchRecipe.addEventListener('keyup', () => {
        const searchString = document.getElementById('recipe-search').value.toLowerCase()
        console.log(searchString)


        const filteredRecipes = recipes.filter((recipe) => {
                return recipe.name.toLowerCase().includes(searchString)
        })
        
        console.log(filteredRecipes)
        //displayRecipe(filteredRecipes)
})*/

export default class Recipe{

        constructor(data = {name: "", servings: null, ingredients:"", time: null, description: "", appliance: "", ustensils: ""}){
                this.ingredients = data.ingredients
                this.name = data.name
                this.servings = data.servings
                this.time = data.time
                this.description = data.description
                this.appliance = data.appliance
                this.ustensils = data.ustensils
        }

        async mainRecipe(){
                this.displayRecipe()  
                this.searchInputKeyup()
        }

        displayRecipe(recipes){

                /*recipes.forEach(recipe =>{
                        document.getElementsByClassName('name').innerText = recipe.name
                        console.log(recipe.name)
                        document.getElementsByClassName('servings').innerText = "Pour " + this.servings + " personnes"
                        document.getElementsByClassName('time').innerText = "Temps de préparation : " + this.time
                        document.getElementsByClassName('description').innerText = this.description
                        document.getElementsByClassName('appliance').innerText = "Matériel : " + this.appliance
                        document.getElementsByClassName('ustensils').innerText = "Ustensiles : " + this.ustensils
        
                        /*recipe.forEach(ingredient => {
        
                                document.getElementsByClassName('ingredients').innerText = ingredient.ingredient
                                
                                if(ingredient.unit){
                                        document.getElementsByClassName('ingredients').innerText = ingredient.ingredient +":" + " " + ingredient.quantity + " " + ingredient.unit
                                        console.log(ingredient.unit)
                                }else{
                                        document.getElementsByClassName('ingredients').innerText = ingredient.ingredient +":" + " " + ingredient.quantity
                                }
                        })
                        })*/
        }
        searchInputKeyup(){
                const searchRecipe = document.getElementById('recipe-search')
                searchRecipe.addEventListener('keyup', () => {
                        const searchString = document.getElementById('recipe-search').value.toLowerCase()

                        const filteredRecipes = recipes.filter((recipe) => {
                                return recipe.ustensils.toLowerCase().includes(searchString) +
                                recipe.name.toLowerCase().includes(searchString) +
                                recipe.description.toLowerCase().includes(searchString)
                        })
                        console.log(filteredRecipes)
                })
        }
}

/*class recipePattern extends Recipe{
        displayRecipe(recipes){
                recipes.forEach(recipe => {
                        document.getElementsByClassName('name') = "";
                        document.getElementsByClassName('name') = this.name
                        console.log(this.$name_dom)
                        /*document.getElementsByClassName('servings').innerText = "Pour " + this.servings + " personnes"
                        document.getElementsByClassName('time').innerText = "Temps de préparation : " + this.time
                        document.getElementsByClassName('description').innerText = this.description
                        document.getElementsByClassName('appliance').innerText = "Matériel : " + this.appliance
                        document.getElementsByClassName('ustensils').innerText = "Ustensiles : " + this.ustensils*/
               /* })
                

                /*this.ingredients.forEach(ingredient => {

                        document.getElementsByClassName('ingredients').innerText = ingredient.ingredient
                        
                        if(ingredient.unit){
                                document.getElementsByClassName('ingredients').innerText = ingredient.ingredient +":" + " " + ingredient.quantity + " " + ingredient.unit
                                console.log(ingredient.unit)
                        }else{
                                document.getElementsByClassName('ingredients').innerText = ingredient.ingredient +":" + " " + ingredient.quantity
                        }
                })
        }
}

const lol = new recipePattern()
lol.displayRecipe()
*/
                

        /*searchInputKeyup(){
                const searchRecipe = document.getElementById('recipe-search')
                searchRecipe.addEventListener('keyup', () => {
                        const searchString = document.getElementById('recipe-search').value.toLowerCase()

                        const filteredRecipes = recipes.filter((recipe) => {
                                return recipe.name.toLowerCase().includes(searchString)       
                        })
                        console.log(filteredRecipes)
                })
        }*/


/*const recipesAll = recipes.forEach(recipe =>{
        const eachRecipe = new allRecipes(recipe)
        console.log(eachRecipe)
})*/
//allRecipes.main()
