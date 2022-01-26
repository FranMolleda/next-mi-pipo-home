import { useState } from "react";
import Link from "next/link";

const HomeMenu = () => {
  const [categoria, setCategoria] = useState("");

  return (
    <form action="/">
      <select
        name="chupetes"
        id="Chupetes"
        onChange={(e) => setCategoria(e.target.value)}
      >
        <Link href={"/personalizados"}>
          <option as="a" value="personalizados">
            Personalizados
          </option>
        </Link>
        <Link href={"/personalizados"}>
          <option value="divertidos">Divertidos</option>
        </Link>
        <Link href={"/personalizados"}>
          <option value="packs-de-chupetes">Packs</option>
        </Link>
      </select>
    </form>
  );
};

export default HomeMenu;
