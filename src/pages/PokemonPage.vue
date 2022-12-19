<template>
    <h1>¿Quien es este pokemon?</h1>
      
      <PokemonPicture :pokemonId="4" :showPokemon="true"/>
      <PokemonOption/>

</template>

<script>
import PokemonOption from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions from "@/helpers/getPokemonOptions.js";
export default {

    components:{
        PokemonOption,
        PokemonPicture
    }   
}
</script>
