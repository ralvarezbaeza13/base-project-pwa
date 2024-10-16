import { useEffect, useState } from 'react';
import { container } from '../../di/DependencyInjection';
import { TYPES } from '../../di/Types';
import { FetchActsUseCase } from '../../../domain/usecase/FetchActsUseCase';
import { ActDomainM } from '../../../domain/model/ActDomainM';

export const useFetchActs = () => {
  const [data, setData] = useState<Array<ActDomainM>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchActsUseCase = container.get<FetchActsUseCase>(TYPES.FetchActsUseCase);

    const fetchData = async () => {
      try {
        const result = await fetchActsUseCase.execute();
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 1000);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};