import React from "react";
import { Pokemon } from "../../domain/model/Pokemon";

interface PokemonListProps {
  pokemon: Pokemon[];
  onPokemonClick: (name: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemon,
  onPokemonClick,
}) => {
  return (
    <ul className="space-y-2">
      {pokemon.map((poke) => (
        <li
          key={poke.name}
          className="text-lg bg-gray-200 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 transition duration-200"
          onClick={() => onPokemonClick(poke.name)}
        >
          {poke.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
