const getPokemons = () =>{
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map(( _, index )=> index + 1 )
}

const getPokemonOptions = () =>{
    const mixedPokemons = getPokemons().sort(() => Math.random() -0.5 )
    getPokemonsNames(mixedPokemons.splice(0, 4))
    console.log(mixedPokemons)
}

const getPokemonsNames = ([ a, b, c, d ] = [] ) => {


}
export default getPokemonOptions;