import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ data }) => {
  return (
    <div>
      <h2>
        {data.name}#: {data.id}
      </h2>
      <Image
        src={data.sprites.front_default}
        width={400}
        height={400}
        alt={`${data.name}`}
      />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Pokemon;

//? SSR Server Side Rendering
export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return { props: { data } };
};
