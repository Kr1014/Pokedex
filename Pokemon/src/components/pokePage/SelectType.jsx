import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { setPokemonName } from '../../store/slices/pokemonName'
import { useDispatch } from 'react-redux'

const SelectType = ({setSelectValue}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [type, getType] = useFetch()
    const dispatch = useDispatch()

    useEffect(() => {
        getType(url)
    }, [])

    const textSelect = useRef()

    const handleChange = () =>{
        setSelectValue(textSelect.current.value)
        dispatch(setPokemonName(""))
    }
    

  return (
       <select name="" id="" onChange={handleChange} ref={textSelect} className='select_pokemons'>
            <option value="allPokemons">Todos los pokemons</option>
            {
                type?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
  )
}

export default SelectType