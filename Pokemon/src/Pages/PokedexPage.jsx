import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonName } from '../store/slices/pokemonName'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokePage/PokeCard'
import SelectType from '../components/pokePage/SelectType'
import '../components/styles/pokePage.css'

const PokedexPage = () => {

  const [pokemons, getPokemons, getPerType] = useFetch()
  const [selectValue, setSelectValue] = useState('allPokemons')

  useEffect(() => {
    if (selectValue==='allPokemons') { 
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1000'
      getPokemons(url)     
    }
    else{
      getPerType(selectValue)
    }
  }, [selectValue])

  const trainerName = useSelector((store) => store.trainerName)
  const dispatch = useDispatch()
  const pokemonName = useSelector((store)=> store.pokemonName)

  const textInput = useRef()

  const handleSearch = (event) =>{
    event.preventDefault()
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()))
    textInput.current.value= ''
  }

  const cbFilter = () =>{
    if(pokemonName){
      return pokemons?.results.filter(element => element.name.includes(pokemonName))
    }
    else{
      return pokemons?.results
    }
  }

  return (
    <>
     <div className='div_red_pokedex'></div>
     <div className='div_black_pokedex'></div>
     <div className='circle_father_pokedex'>
        <div className='circle_1_pokedex'></div>
        <div className='circle_2_pokedex'></div>
        <div className='circle_3_pokedex'></div>
      </div>
    <article className='Poke_page'>
        <h1 className='welcome_pokedex'><span className='welcome_trainer'>Bienvenido {trainerName}</span>, aquí podrás encontrar tu pokemon favorito</h1>
        <form onSubmit={handleSearch} className='search_pokemon'>
          <input type="text" placeholder='Busca un pokemon' ref={textInput} className='pokemon_name'/>
          <button className='buttom_pokemon_name'>Buscar</button>
        </form>
        <SelectType
          setSelectValue = {setSelectValue}
        />
    </article>
    <div className='content_cards'> 
    {
    cbFilter()?.map(pokemon => (
      <PokeCard
        url={pokemon.url}
        key = {pokemon.url}
      />
    ))  
    }
    </div>
    <div className='container_buttom'>
      <button className='buttom_next'>Next</button>
      <button className='buttom_prev'>Prev</button>
    </div>
    </>
  )
}

export default PokedexPage