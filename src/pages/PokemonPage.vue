<template>

    <div v-if="pokemon">
        <h1>¿Quien es este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOption :pokemons="pokemonArr" @selection="checkAnswer"/>

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">Nuevo juego</button>
        </template>
    </div>

    <h1 v-else>Espere por favor...</h1>

</template>

<script>
import PokemonOption from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions from "@/helpers/getPokemonOptions.js";
export default {

    components:{
        PokemonOption,
        PokemonPicture
    },
    data(){
        return{
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer(pokemonId){
            this.showAnswer = true
            this.showPokemon = true 
            if(pokemonId === this.pokemon.id){
                this.message = `Correcto, ${this.pokemon.name}`
            }else{
                this.message = `Oops era: ${this.pokemon.name}`

            }
        },
        newGame(){
            this.pokemonArr = []
            this.showAnswer = false
            this.showPokemon = false 
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
        mounted(){
            this.mixPokemonArray()
        }
}
</script>
