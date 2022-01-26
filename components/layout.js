import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Mi Pipo - {pagina}</title>
        <meta name="description" content="Sitio Web de venta de gritarras" />
      </Head>
      <Header />
      {children}
      {<Footer />}
    </div>
  );
};

export default Layout;
