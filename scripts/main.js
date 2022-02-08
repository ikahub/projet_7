import recipes from '/data/recipes.js'
import Recipe from '/data/search.js'

class AllRecipes {
    constructor(){
        this.$recipes_section = document.getElementById('recipes')
        console.log(this.$recipes_div)
    }

    async main(){
        this.displayRecipes(recipes)
    }

    displayRecipes(anyRecipe){
        
        
        anyRecipe.forEach(recipe => {
            const newR = new Recipe(recipe)
            newR.displayRecipe()
            console.log(newR)
            console.log(newR.displayRecipe())
            //this.$recipes_section.appendChild()
            //const newRecipe = new Recipe(recipe)
            //console.log(this.recipeCall.displayRecipe(recipes))
        })
        
    }
}

const mainCall = new AllRecipes()

mainCall.main()