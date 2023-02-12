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

        const wrapper = shallowMount(PokemonPageVue,{
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
    
      test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPageVue,{
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
        
        expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-option-stub').exists()).toBeTruthy()

        expect(wrapper.find('pokemon-option-stub').attributes('pokemons')).toBeTruthy()
        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe('5')
        
      })
      
      test('Pruebas con checkAnswer', async () => {

        const wrapper = shallowMount(PokemonPageVue,{
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
        
        await wrapper.vm.checkAnswer(5)
        
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect( wrapper.vm.showPokemon ).toBeTruthy()
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${mockPokemons[0].name}`)
        
        await wrapper.vm.checkAnswer(10)
        expect( wrapper.vm.message ).toBe(`Oops era: ${mockPokemons[0].name}`)
        
      })

 })