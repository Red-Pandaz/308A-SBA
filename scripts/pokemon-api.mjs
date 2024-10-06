const API_KEY = 'hzlQFIhPtkjwHxBIzXAeSvObP4drgHyxKUogiPsZZFc';
const PERENUAI_API_KEY = 'sk-XhWH66ff34921e8d37107'
// import axios from 'axios'

export async function getPokemon(pokeId){
    try {
        let pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`, {
        });
        return pokemonResponse.data
      } catch (error) {
        console.error(error);
      }
}

export async function generatePokemon(){
    let pokeNum = Math.floor(Math.random() * 1025) + 1
    let pokemon = await getPokemon(pokeNum)
    console.log(pokemon)
    return pokemon
}
