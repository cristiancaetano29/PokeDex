export const Pokemon = async (pokemon) => {
    try{
    let ulrFetch = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const resultado = await fetch(ulrFetch)
    return await resultado.json();
    }
    catch(error){
        console.error(error)
    }
}






