class recipeApi {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        //super(url)
        this._url = url
    }

    async getRecipes() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error occurs', err))
    }
    async getData(id){
        const data = await fetch(this._url)
        const json = await data.json()
        const recipe = json.recipes.find(r => r.id === parseInt(id))
        console.log(recipe)
        return recipe
    }
}