import Link from "next/link";
/* import Image from "next/image";
 */ import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/products">productos</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
