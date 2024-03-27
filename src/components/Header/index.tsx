import Image from 'next/image';
import Logo from "../../../public/pokebola.png"
import 'tailwindcss/tailwind.css'

import { motion } from "framer-motion";
import { AnimatedTextWord } from '../AnimatedTextWord';

interface IHeaderProps {
    children: React.ReactNode
}

export const Header = ({children}: IHeaderProps) => {

    const text = "Pokedex".split("");
  
    return (
      <header className="bg-dark-red text-white p-4 flex items-center w-full">
        <Image alt='pokeball fast' src={Logo} width={70} height={70}/>
        <h1 className="text-2xl font-bold pl-4">
            <AnimatedTextWord text='Pokedex' splitText=''/>
        </h1>
        {children}
      </header>
    );
  };