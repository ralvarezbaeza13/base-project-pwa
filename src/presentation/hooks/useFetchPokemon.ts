import { useEffect, useState } from "react";
import { FetchPokemonUseCase } from "../../domain/usecase/FetchPokemonUseCase";
import { Pokemon } from "../../domain/model/Pokemon";
import { container } from "../../presentation/di/DependencyInjection";
import { TYPES } from "../../presentation/di/Types";

export const useFetchPokemon = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonUseCase = container.get<FetchPokemonUseCase>(
      TYPES.FetchPokemonUseCase
    );

    const fetchData = async () => {
      try {
        const result = await fetchPokemonUseCase.execute();
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 1000);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
