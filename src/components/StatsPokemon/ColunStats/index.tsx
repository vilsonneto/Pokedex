import { IStatsPokemon } from "@/src/interfaces/pokemon";
import styles from "./style.module.css";
import { motion } from "framer-motion"

interface IColunStatsProps {
    stats: IStatsPokemon
}

export const ColunStats = ({stats}:IColunStatsProps) => {
    const heightColun = (stats.base_stat / 225) * 100
  return (
    <li className={`${styles.colun}`}>
      <ul className={`${styles.back}`}>
        <motion.li 
        initial={{
            top: '100%'
          }}
        whileInView={{
        top: `${100 - heightColun}%`,
        transition: {
          duration: 0.3,
          ease: 'easeOut',
        }
      }} className={`${styles.quantity}`}></motion.li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
        <li className={`${styles.piece}`}></li>
      </ul>
      <p className="text-gray-400 text-[10px] sm:text-sm font-bold text-center">{stats.stat.name}</p>
    </li>
  );
};
