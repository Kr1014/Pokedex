import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import PokeId from '../../Pages/PokeIdPage'

const PokeCard = ({url}) => {

const [pokemon, getPokemon]= useFetch()

useEffect(() => {
    getPokemon(url)
}, [])

const navigate = useNavigate()

const handleOpen = () =>{
  navigate(`/pokedex/${pokemon.id}`)
}


  return (
    <>
    <article onClick={handleOpen} className='Poke_card'>
      <div className = {pokemon?.types[0].type.name} ></div>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon-photo" className ="img_poke_card" />
        <h3 className ="poke_name">{pokemon?.name}</h3>
        <ul className='list_poke_type'>
          {
            pokemon?.types.map(type => (
              <li key={type.type.url} className={`slot${type.slot}`}>{type.type.name}</li>
            ))
          }
        </ul>
        <ul className = "list_poke_stats">
          {
            pokemon?.stats.map(stat => (
              !stat.stat.name.includes('special')&&
              <li key={stat.stat.url}>{stat.stat.name}<span className='stats'>{stat.base_stat}</span> </li>
            ))
          }
        </ul>
    </article>
  </>
  )
}

export default PokeCard
