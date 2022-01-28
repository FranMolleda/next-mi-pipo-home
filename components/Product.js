import style from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

function Product({ product }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${product.images[0].src}`;
  console.log(url)
  const { id, canonical_uri } = product;
  return (
    <>
      <div className={style.product}>
        <Image
          src={url}
          width={300}
          height={200}
          alt={`${product.name} imagen`}
        />
        <p>Nombre: {product.name}</p>
        <p>Id: {product.id}</p>
        <Link href={`/products/${canonical_uri}`}>
          <a>Ver Producto</a>
        </Link>
      </div>
    </>
  );
}

export default Product;
