import React from "react";

const Pokemons = (props) => {
    const { pokemon } = props

    return (
        <div className="flex gap-5 w-10/12 h-[200px] rounded-md shadow-xl shadow-slate-400 items-center justify-center ml-10">
            <div className="">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 "/>
            </div>

            <div className="flex flex-col flex-wrap">
                <div className="text-lg ">
                    Nome:
                    <label className='uppercase'> {pokemon.name}</label> 
                </div>
                <div className="">
                    <div className="">
                        {pokemon.types.map((type, index) => {
                            return(
                                <div className="">
                                    <div className="" key={index} >Tipo: {type.type.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemons;