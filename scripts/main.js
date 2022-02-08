import recipes from '/data/recipes.js'
import Recipe from '/data/search.js'

class AllRecipes {
    constructor(){
        this.$recipes_div = document.getElementsByClassName('div-recipe')
    }

    async main(){
        this.displayRecipes(recipes)
    }

    displayRecipes(anyRecipe){
        

        anyRecipe.forEach(recipe => {
            
            const newRecipe = new Recipe(recipe)
            console.log(newRecipe)
            //const newRecipe = new Recipe(recipe)
            //console.log(this.recipeCall.displayRecipe(recipes))
        })
    }
}

const mainCall = new AllRecipes()

mainCall.main()