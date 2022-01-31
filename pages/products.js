import Product from "../components/Product";
import Layout from "../components/Layout";
import style from "../styles/Products.module.css";
import axios from "axios";

const Productos = ({ products }) => {
  return (
    <Layout pagina="Productos">
      <div className={style.products}>
        <h4>Listado de productos</h4>
        {products.length > 0 ? (
          <div>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No hay ningún producto</p>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.API_URL}/products`);
  const products = response.data.data.products;

  return {
    props: { products },
  };
}
export default Productos;
