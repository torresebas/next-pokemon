import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Pokemon = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>...Loading</p>;
  }
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

//! SSG Static Site Generation
export const getStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return { paths, fallback: true };
};
