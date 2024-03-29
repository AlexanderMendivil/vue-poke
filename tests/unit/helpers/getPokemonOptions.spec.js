import getPokemonOptions, { getPokemons, getPokemonsNames } from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helpers', () => {

    test('Debe de regresar un arreglo de numeros', () => { 
        const pokemons = getPokemons();

        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
     });

     test('Debe de retornar un arreglo de 4 elementos con nombres de pokemons', async () => {
        const pokemon = await getPokemonsNames([1,2,3,4]);

        expect(pokemon).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ])

      });
     
     test('Debe de retornar un arreglo mezclado ', async () => {
        
        const pokemons = await getPokemonOptions();

        expect(pokemons.length).toBe(4);
        expect(pokemons).toStrictEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
        ]);
      });
});