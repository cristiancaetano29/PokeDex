import React, { useState } from "react";

const CampoDeBusca = (props) => {

    const [texto, setTexto] = useState();
    const { pokeFilter } = props

    const changeHandle = (event) => {
        setTexto(event.target.value)
        pokeFilter(event.target.value)
        if(event.target.value.length === 0 ){
            pokeFilter(undefined)
        }
    }

    const ButtonHandleClear = (event) => {
        let values = document.querySelector('#clear').value = ''
        setTexto(values)
        pokeFilter(undefined)
    }

    return (
        <div className=" flex my-0 py-0 justify-center items-center">
            <div className="mr-6">
                <input type="text" id="clear" className="py-2 shadow-md shadow-slate-400 w-[500px] rounded-lg border-none ml-5 pl-3" placeholder="Pesquisar..." onChange={changeHandle}/>
            </div>
            <div className="ml-5 bg-red-600 rounded-lg border-none py-2 w-28 cursor-pointer text-center text-zinc-50 shadow-lg shadow-red-900">
                <button onClick={ButtonHandleClear} className='uppercase'>
                    Limpar
                </button>
            </div>
            
        </div>
    );
}

export default CampoDeBusca;