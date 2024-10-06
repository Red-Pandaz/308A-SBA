export function catchPokemon(pokeId){
    let pokedex = getPokedex()
    if(pokedex.length >= 6){
        alert('Pokedex is full, pleasae release a pokemon before you try catching another')
        return
    } else if(pokedex.find(pokemon => pokemon === pokeId)){
        alert('Pokemon already caught, all 6 pokemon must be unique.')
        return
    } else{
        pokedex.push(pokeId)
        savePokedex(pokedex)

    }
}

export function releasePokemon(pokeId){
    let pokedex = getPokedex()
    if(pokedex.find(pokemon => pokemon.id === pokeId)){
        pokedex.splice(pokedex.indexOf(pokeId), 1)
        console.log(`Pokemon # ${pokeId} released, current Pokemon lineup: ${pokedex}`)
        savePokedex(pokedex)
        return pokedex
    } else{
        console.log(`Pokemon # ${pokeId} not found in lineup`)
        return
    }
}

export function getPokedex(){
    let pokedex = JSON.parse(localStorage.getItem('pokedex')) || [];
    console.log(`got Pokedex: ${pokedex}`)
    return pokedex
}

export function savePokedex(pokedex){
    localStorage.setItem('pokedex', JSON.stringify(pokedex));
    console.log(`saved Pokedex: ${pokedex}`)
    return
}

export function clearPokedex(){
    localStorage.setItem('pokedex', JSON.stringify([]));
}