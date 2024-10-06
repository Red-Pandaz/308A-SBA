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
        savePokeBtn.style.height = '50px'
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
        pokeDiv.innerHTML = ''
        let pokedex = storageFuncs.getPokedex()
        for(let pokemonId of pokedex){
            let myPoke = await pokeFuncs.getPokemon(pokemonId)
            console.log(myPoke)
            let caughtPokeDiv = document.createElement('div')
            let caughtPokeImg = document.createElement('img')
            let pokeHeader = document.createElement('h3')
            let releaseBtn = document.createElement('button')
            releaseBtn.setAttribute('value', pokemonId)
            releaseBtn.innerText = 'Release?'
            releaseBtn.addEventListener('click', function(e){
                e.target.parentElement.innerHTML = ''
                console.log(e.target.value)
                storageFuncs.releasePokemon(parseInt(e.target.value))
            

            })
            let pokeName = myPoke.name
            console.log(pokeName)
            let firstLetter = pokeName[0].toUpperCase()
            pokeName = firstLetter + pokeName.slice(1)
            pokeHeader.innerText = `${pokeName}`
            caughtPokeImg.setAttribute('src', myPoke.sprites.front_default)
            caughtPokeDiv.append(pokeHeader)
            caughtPokeDiv.append(caughtPokeImg)
            caughtPokeDiv.append(releaseBtn)
            pokeDiv.append(caughtPokeDiv)
        }
    })


})
