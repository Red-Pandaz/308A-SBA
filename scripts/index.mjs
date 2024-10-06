import * as pokeFuncs from './pokemon-api.mjs'
import * as storageFuncs from './storage-crud.mjs'

window.addEventListener('load', function(){
    let collectionBtn = document.querySelector('#collectionBtn')
    let generateBtn = document.querySelector('#generateBtn')
    let pokeDiv = document.querySelector('#pokeDiv')
    generateBtn.addEventListener('click', async function(e){
        pokeDiv.innerHTML = ''
        let pokemon = await pokeFuncs.generatePokemon()
        let pokeImg = document.createElement('img')
        let savePokeBtn = document.createElement('button')
        pokeImg.setAttribute('src', pokemon.sprites.front_default)
        savePokeBtn.setAttribute('value', pokemon.id)
        savePokeBtn.innerText = `Catch ${pokemon.name}?`
        savePokeBtn.addEventListener('click', function(e){
            let pokeId = e.target.value
            storageFuncs.catchPokemon(pokeId)
        })
        pokeDiv.append(pokeImg)
        pokeDiv.append(savePokeBtn)

    })
    collectionBtn.addEventListener('click', async function(e){
        pokeDiv.innterHTML = ''
        let pokedex = storageFuncs.getPokedex()
        for(let pokemonId of pokedex){
            let myPoke = await pokeFuncs.getPokemon(pokemonId)
            console.log(myPoke)
            let caughtPokeDiv = document.createElement('div')
            let caughtPokeImg = document.createElement('img')
            caughtPokeImg.setAttribute('src', myPoke.sprites.front_default)
            caughtPokeDiv.append(caughtPokeImg)
            pokeDiv.append(caughtPokeDiv)
        }
    })


})
