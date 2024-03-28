import Image from "next/image";
import Logo from "../../../public/pokebola.png";
import "tailwindcss/tailwind.css";

import { AnimatedTextWord } from "../AnimatedTextWord";
import Link from "next/link";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  const text = "Pokedex".split("");

  return (
    <header className="bg-dark-red text-white p-4 w-full gap-5s flex flex-wrap items-center justify-center sm:justify-between ">
      <Link className="flex items-center" href="/">
        <Image alt="pokeball fast" src={Logo} width={70} height={70} />
        <h1 className=" sm:block sm:text-2xl text-md  font-bold pl-4">
          <AnimatedTextWord text="Pokedex" splitText="" />
        </h1>
      </Link>
      {children}
    </header>
  );
};
