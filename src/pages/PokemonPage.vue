<template>
    <h1>¿Quien es este pokemon?</h1>
      
      <PokemonPicture :pokemonId="4"/>
      <PokemonOption/>

</template>

<script>
import PokemonOption from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
export default {

    components:{
        PokemonOption,
        PokemonPicture
    }
}
</script>
