import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <li>
        <Link href={`pokemones/${id}`}>SSR Server Side Rendering</Link>
      </li>
      <li>
        <Link href={`pgstaticdinamic/${id}`}>SSG Static Site Generation</Link>
      </li>
    </div>
  );
};

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <h1>Pokemones</h1>
      <div>
        <ul>
          {pokemones.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </div>
  );
}

//! SSG Static Site Generation
export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};
