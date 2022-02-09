import recipeTmpl from "../templates/recipeTmpl.js"
import filterTmpl from "../templates/filterTmpl.js"
class Recipe {

  constructor(data = {name: "", servings: null, ingredients: [], time: null, description: "", appliance: "", ustensils: ""}){
    this.ingredients = data?.ingredients || []
    this.name = data?.name || ''
    this.servings = data?.servings || null
    this.time = data?.time || null
    this.description = data?.description || ''
    this.appliance = data?.appliance || ''
    this.ustensils = data?.ustensils || []
  }

  generateDomRecipeEl() {

    /////// RECIPE GENERATION ///////
    const domRecipe = document.createElement('div')
    domRecipe.classList.add('div-recipe')
    domRecipe.innerHTML = recipeTmpl
    domRecipe.querySelector('.name').innerText = this.name
    this.ingredients.forEach(ingredient => {
      if(ingredient.unit){
        domRecipe.querySelector('.ingredients').innerText = ingredient.ingredient + ": " + ingredient.quantity + " " + ingredient.unit
      }else{
        domRecipe.querySelector('.ingredients').innerText = ingredient.ingredient + ": " + ingredient.quantity
      }
    })
    domRecipe.querySelector('.servings').innerText = `Pour : ${this.servings} personnes`
    domRecipe.querySelector('.time').innerText = `Temps de préparation : ${this.time} minutes`
    domRecipe.querySelector('.description').innerText = this.description
    domRecipe.querySelector('.appliance').innerText = this.appliance
    domRecipe.querySelector('.ustensils').innerText = this.ustensils
    domRecipe.querySelector('.name').innerText = this.name

    return domRecipe
  }
  generateDomFilterEl(){
    const domIngredientsFilter = document.createElement('ul')
    domIngredientsFilter.classList.add('ingredients-liste')
    domIngredientsFilter.innerHTML = filterTmpl
    this.ingredients.forEach(ingredient => {

      const newIngredientsArray = []
      //console.log(ingredient)
      for(let i = 0; i < ingredient.ingredient.length; i++){
          const nameIngredient = ingredient.ingredient
          if(newIngredientsArray.indexOf(nameIngredient) === -1){
            newIngredientsArray.push(nameIngredient);
            const eachIngredientThatFilter = document.createElement('li')
            eachIngredientThatFilter.innerHTML = nameIngredient
            domIngredientsFilter.appendChild(eachIngredientThatFilter)
            console.log(ingredient)
          }
          console.log(newIngredientsArray)
      }
    })
    return domIngredientsFilter
  }

}

export default Recipe