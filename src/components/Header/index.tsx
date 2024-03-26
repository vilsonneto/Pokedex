import Image from 'next/image';
import Logo from "../../../public/pokebola.png"
import 'tailwindcss/tailwind.css'

interface IHeaderProps {
    children: React.ReactNode
}

export const Header = ({children}: IHeaderProps) => {
  
    return (
      <header className="bg-red text-white p-4 flex items-center">
        <Image alt='pokeball fast' src={Logo} width={70} height={70}/>
        <h1 className="text-2xl font-bold pl-4">Pokedex</h1>
        {children}
      </header>
    );
  };