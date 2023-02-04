import { shallowMount } from "@vue/test-utils"
import pokemonOptions from "@/components/PokemonOptions.vue"
import { mockPokemons } from '../mocks/pokemonsMock'

describe('pokemonOptions Component', () => { 

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount( pokemonOptions ,{
            props:{
                pokemons: mockPokemons
            }
        } )
    })

    test('Debe de hacer match con el snapshot', () => {  
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de mostrar las 4 opciones correctamente', () => {  
        const liTags = wrapper.findAll('li')
        
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe(mockPokemons[0].name)
        expect(liTags[1].text()).toBe(mockPokemons[1].name)
        expect(liTags[2].text()).toBe(mockPokemons[2].name)
        expect(liTags[3].text()).toBe(mockPokemons[3].name)


    })
    
    test('Debe de emitir "selection" con sus respectivos parametros al ahcer click', () => {  
        const [ l1, l2, l3, l4 ] = wrapper.findAll('li')

        l1.trigger('click')
        l2.trigger('click')
        l3.trigger('click')
        l4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([5])
        expect(wrapper.emitted('selection')[1]).toEqual([10])
        expect(wrapper.emitted('selection')[2]).toEqual([15])
        expect(wrapper.emitted('selection')[3]).toEqual([20])
    })

})