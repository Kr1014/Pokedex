import React, { useRef } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { setTrainerName } from '../store/slices/trainerName'
import { useNavigate } from 'react-router-dom'
import '../components/styles/homePage.css'

const HomePage = () => {

    const textInput = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const trainerName = useSelector((store) => store.trainerName )

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainerName(textInput.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <>
    <article className='Home_page'>
        <h1 className='title_pokedex raleway-1'>POKÉDEX</h1>
        <h1 className='welcome'>¡Hola entrenador!</h1>
        <h2 className='start_name'>Para poder comenzar dame tu nombre</h2>
        <form onSubmit={handleSubmit} className='form_name'>
            <input type="text" placeholder='Tu nombre...' ref={textInput} className='trainer_name'/>
            <button className='buttom_trainer_name'>Comenzar</button>
        </form>
    </article>
      <div className='circle_father'>
        <div className='circle_1'></div>
        <div className='circle_2'></div>
        <div className='circle_3'></div>
      </div>
    <div className='div_red'></div>
    <div className='div_black'></div>
    </>
  )
}

export default HomePage