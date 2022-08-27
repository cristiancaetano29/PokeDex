import React from "react";
import Pokemons from "./Pokemons";


const PokeDex = (props) => {
    const { pokemons } = props
    return (
        <div>
            <div className="flex flex-row justify-between items-center py-3 font">
                <h1 className="text-4xl ml-10 rounded-lg bg-sky-600 text-white py-2 ">PokeDex</h1>
                <div className="text-4xl mr-10">
                    Paginação(Soon)
                </div>
            </div>
            <div>
                <div className="grid gap-3 grid-cols-4 ">
                    {
                    pokemons && pokemons.map((pokemon, index) => {
                        return(
                                <div>
                                <Pokemons key={index} pokemon={pokemon}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PokeDex;