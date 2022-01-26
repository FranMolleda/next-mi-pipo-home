import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function Articulo({ articulo }) {
  console.log(articulo);
  const router = useRouter();

  const urlQuery = router.query;

  const articuloSeleccionado = articulo.find(
    (art) => art.canonical_uri === urlQuery.canonical_uri
  );

  return (
    <Layout pagina="Productos">
      <div>
        <p>{articuloSeleccionado.name}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const url = `${process.env.GET_PRODUCTS}`;
  const response = await fetch(url);
  const articulos = await response.json();

  const paths = articulos.data.products.map((articulo) => ({
    params: { canonical_uri: articulo.canonical_uri },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { canonical_uri } }) {
  const url = `${process.env.GET_PRODUCTS}/?canonical_uri=${canonical_uri}`;
  const response = await fetch(url);
  const articulo = await response.json();
  return {
    props: { articulo: articulo.data.products },
  };
}

/* export async function getServerSideProps({ query: { id } }) {
  const url = `https://erp.skydone.net/api/v1/products/find/${id}`;
  const respuesta = await fetch(url);
  console.log(respuesta);

  const articulo = await respuesta.json();

  console.log(articulo);
  return {
    props: { articulo },
  };
} */

export default Articulo;
