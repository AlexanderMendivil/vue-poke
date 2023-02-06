import { shallowMount, mount } from "@vue/test-utils"
import PokemonPageVue from "@/pages/PokemonPage.vue"
import { mockPokemons } from "../mocks/pokemonsMock"
describe('PokemonPage component', () => { 

    let wrapper
    beforeEach( ()=> {

        wrapper = shallowMount( PokemonPageVue )
        jest.clearAllMocks()

    })

    test('should first', () => { 
        expect(wrapper.html()).toMatchSnapshot()
     })

    test('Debe de llamar el mixPokemonArray al montar', () => {
        const mixPokemonArraySpy = jest.spyOn( PokemonPageVue.methods, 'mixPokemonArray' )

        const wrapper = shallowMount(PokemonPageVue)
        expect( mixPokemonArraySpy ).toHaveBeenCalled() 
      })

    test('Debe de hacer match con el snapshot cuando carguen los pokemons', () => {

        const wrapper = mount(PokemonPageVue,{
            data(){
                return{
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: '',
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
      })

 })