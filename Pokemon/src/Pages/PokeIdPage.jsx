import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import {useParams}  from 'react-router-dom'
import "../components/styles/pokeIdPage.css"


const PokeId = () => {

  const [pokemonData, getPokemonData] = useFetch()

  const param = useParams()

useEffect(() => {
  const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
  getPokemonData(url)
}, [])

console.log(pokemonData)



  return (
    <div className='Poke_id'>
      <article className='container_poke_id'>
        <div className='main_poke_id'>
          <div className='background_poke_id'></div>
          <div className='container_img_id'>
            <img src={pokemonData?.sprites.other['official-artwork'].front_default} alt="pokemon-photo" className='img_poke_id'/> 
          </div>  
          <h1 className='number'>#{pokemonData?.id}</h1>
          <h3 className='name_poke_id'>{pokemonData?.name}</h3>
          <h4 className='weight_height_pokemon'>Weight <span className='span_weight'>{pokemonData?.weight}</span> Height <span className='span_height'>{pokemonData?.height}</span></h4>
        
        <h3 className='type_name'>Type</h3>
        <ul className='type_pokemon_id'>
          {
            pokemonData?.types.map(type =>(
              <li key={type.type.name} className='name_type_id'>{type.type.name}</li>
            ))
          } 
        </ul>
        <h3 className='skills_title_id'>Skills</h3>
        <ul className='list_skills_id'>
          {
          pokemonData?.abilities.map(ability=>(
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))
          }
        </ul>
        </div>
        <h3 className='stats_title_id'>Stats</h3>
        <ul className='list_stats_pokemons'>
          <li>{pokemonData?.stats[0].stat.name} <span className='span_data1'></span>{pokemonData?.stats[0].base_stat}/150</li>
            <div className='bar1'></div>
          <li>{pokemonData?.stats[1].stat.name} <span className='span_data2'></span>{pokemonData?.stats[1].base_stat}/150</li>
            <div className='bar2'></div> 
          <li>{pokemonData?.stats[2].stat.name} <span className='span_data3'></span>{pokemonData?.stats[2].base_stat}/150</li>
            <div className='bar3'></div>
          <li>{pokemonData?.stats[5].stat.name} <span className='span_data4'></span>{pokemonData?.stats[5].base_stat}/150</li>
            <div className='bar4'></div>
        </ul>
        <h3 className='title_movements_pokemons'>Movements</h3>
        <ul className='list_movements_pokemons'>
          {
            pokemonData?.moves.map(move=>(
              <li key={move.move.name}>{move.move.name}</li>
            ))
          }
        </ul>
      </article>
    </div>
    
  )
}

export default PokeId