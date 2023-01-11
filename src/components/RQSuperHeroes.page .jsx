import axios from 'axios';
import { useQuery } from 'react-query';
const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};
export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error } = useQuery('super-heroes', fetchSuperHeroes);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div className="123">{data?.data.map((item) => item.name)}</div>
    </>
  );
};
