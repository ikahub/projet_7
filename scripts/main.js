import recipes from '../data/recipes.js'

import Recipe from './recipe.js'
//import searchInputKeyup from './search.js'
//console.log(searchInputKeyup)
class Main {

  constructor() {
    
    
    this.recipes = recipes.map(recipe => new Recipe(recipe))
    
  }

  async main(){
    this.filteredRecipes = this.recipes
    this.displayRecipes()
    this.displayFilter()

    this.searchInput = document.getElementById('recipe-search');
    this.searchInput.addEventListener('keyup', this.searchInputKeyup.bind(this))
  }
  displayFilter(){
    const filterCntr = document.getElementById('div-filter')
    filterCntr.innerHTML = ''
    this.recipes.forEach(filter=> {
      filterCntr.appendChild(filter.generateDomFilterEl())
    })
  }

  displayRecipes() {
    const recipesCntr = document.getElementById('recipes')
    recipesCntr.innerHTML = ''
    this.filteredRecipes.forEach(recipe => {
      recipesCntr.appendChild(recipe.generateDomRecipeEl())
    })
  }
  searchInputKeyup(e){
    this.searchString = e.target.value.toLocaleLowerCase()
    this.filteredRecipes = this.recipes.filter(recipe => {
      return recipe.name.toLocaleLowerCase().includes(this.searchString) ||
             recipe.description.toLocaleLowerCase().includes(this.searchString) //||
             //recipe.servings.toLocaleLowerCase().includes(this.searchString)
             //recipe.time.toLocaleLowerCase().includes(this.searchString) ||
             //recipe.ingredients.toLocaleLowerCase().includes(this.searchString) ||
             //recipe.appliance.toLocaleLowerCase().includes(this.searchString) ||
             //recipe.ustensils.toLocaleLowerCase().includes(this.searchString)
    })
    console.log(this.filteredRecipes)
    this.displayRecipes()
  }
}

const main = new Main()

main.main()

// class AllRecipes {
//     constructor(){
//         this.$recipes_section = document.getElementById('recipes')
//         console.log(this.$recipes_div)
//     }

//     async main(){
//         this.displayRecipes(recipes)
//     }

//     displayRecipes(anyRecipe){
        
        
//         anyRecipe.forEach(recipe => {
//             const newR = new Recipe(recipe)
//             newR.displayRecipe()
//             console.log(newR)
//             console.log(newR.displayRecipe())
//             //this.$recipes_section.appendChild()
//             //const newRecipe = new Recipe(recipe)
//             //console.log(this.recipeCall.displayRecipe(recipes))
//         })
        
//     }
// }

// const mainCall = new AllRecipes()

// mainCall.main()