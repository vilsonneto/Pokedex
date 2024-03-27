interface IIdPokemonProps {
    id: number
}

export const IdPokemon = ({id}: IIdPokemonProps) => {
    const switeIdCase = (pokemonId: any) => {
    pokemonId = String(id)
    for(let i = pokemonId.length; i < 4; i++) {
      pokemonId = "0" + pokemonId;
    }

    return pokemonId;
  }

  return (<span>Nº {switeIdCase(id)}</span>)

}