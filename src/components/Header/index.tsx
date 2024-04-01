import Image from "next/image";
import Logo from "../../../public/pokebola.png";
import "tailwindcss/tailwind.css";
import { useState } from "react";

import { AnimatedTextWord } from "../AnimatedTextWord";
import Link from "next/link";
import { SearchPokemon } from "../SearchPokemon";
import { Menu } from "../Menu";

export const Header = () => {
  const text = "Pokedex".split("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-dark-red text-white p-5 w-full gap-5 flex flex-wrap items-center justify-between ">
      <Link className="flex items-center" href="/">
        <Image alt="pokeball fast" src={Logo} width={70} height={70} priority />
        <h1 className=" sm:block sm:text-2xl text-md  font-bold pl-4">
          <AnimatedTextWord text="Pokedex" splitText="" />
        </h1>
      </Link>
      <Menu isOpen={isMenuOpen} setOpen={setIsMenuOpen}>
        <div className="w-full flex items-center justify-center">
          <SearchPokemon closeMenu={closeMenu} />
        </div>
      </Menu>
     
    </header>
  );
};
