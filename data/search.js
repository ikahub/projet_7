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

        displayRecipe(){

                
                        document.getElementsByClassName('name').innerText = this.name
                        console.log(this.name)
                        document.getElementsByClassName('servings').innerText = "Pour " + this.servings + " personnes"
                        document.getElementsByClassName('time').innerText = "Temps de préparation : " + this.time
                        document.getElementsByClassName('description').innerText = this.description
                        document.getElementsByClassName('appliance').innerText = "Matériel : " + this.appliance
                        document.getElementsByClassName('ustensils').innerText = "Ustensiles : " + this.ustensils
        
                        
                                const ingredient = this.ingredients.ingredient

                                document.getElementsByClassName('ingredients').innerText = this.ingredients.ingredient
                                
                                if(this.ingredients.unit){
                                        document.getElementsByClassName('ingredients').innerText = this.ingredients.ingredient +":" + " " + ingredient.quantity + " " + ingredient.unit
                                        console.log(ingredient.unit)
                                }else{
                                        document.getElementsByClassName('ingredients').innerText = this.ingredients.ingredient +":" + " " + this.ingredients.quantity
                                }
                        
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
