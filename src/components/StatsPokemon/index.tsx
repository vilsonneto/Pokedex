import { IStatsPokemon } from "@/interfaces/pokemon";
import { ColunStats } from "./ColunStats";

interface IStatsPokemonProps {
    stats: IStatsPokemon[]
}

export const StatsPokemon = ({ stats }: IStatsPokemonProps ) => {
    return (
        <div className="p-5 bg-gray-050 w-full h-[240px] rounded-md mt-5">
            <h3 className="text-base text-gray-400 mb-6">Stats</h3>
            <ul className="clear-both">
            {stats.map((stats) => {
                return <ColunStats key={stats.stat.name} stats={stats}/>
            })}
            </ul>
        </div>
    )
};
