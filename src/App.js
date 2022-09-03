import { useEffect, useState } from 'react';
import './App.css';
import CampoDeBusca from './components/CampoDeBusca';
import NavBar from './components/NavBar';
import PokeDex from './components/PokeDex';
import axios from 'axios';
import { Pokemon } from './Api/api';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [NaoAchou, setNaoAchou] = useState(false);

  const GetPoke = () => {
    let rotas = []
    for(let i = 1; i < 49; i++){
      rotas.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    return axios.all(rotas.map((url) => axios.get(url))).then((res) => setPokemons(res.map((res) => res.data)))
  }

  const BuscaVal = async (pokemon) => {
    if(!pokemon){
      GetPoke()
    }
    setNaoAchou(false)
    const resultado = await Pokemon(pokemon)
    if(!resultado)
      setNaoAchou(true)  
    else{
      setPokemons([resultado])
    }
  }

  const pokeFilter = (poke) => {
    let pokemonsAchados = []
    if(poke === '' || poke === undefined){
      GetPoke()
    }
    pokemons.forEach((pokemon) => {
      if(pokemon.name.includes(poke)){
        pokemonsAchados.push(pokemon)
      }
    })
    setPokemons(pokemonsAchados);
}

  useEffect(() => {
    GetPoke()
  },[])

  return (
    <div className="">
      <NavBar />
      <CampoDeBusca pokeFilter = { pokeFilter }/>
      <PokeDex pokemons={ pokemons }/>
    </div>
  );
}

export default App;
