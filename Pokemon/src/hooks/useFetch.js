import { useState } from "react"
import axios from 'axios'

const useFetch = () => {
    const [apiData, setApiData] = useState()

    const getApi = (url) =>{
        axios.get(url)
        .then(res => setApiData(res.data))
        .catch(err => console.log(err))
    }
    const getApiTyPe = (url) =>{
        axios.get(url)
        .then(res => setApiData({
            results: res.data.pokemon.map(poke => poke.pokemon)
        }))
        .catch(err => console.log(err))
    }

    return [apiData, getApi, getApiTyPe]
}

export default useFetch