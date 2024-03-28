import { capitalize } from "@/utils/functions/capitalize"
import styles from './styles.module.css';
interface ITagTypeProps {
    type: string
}

export const TagType = ({type}: ITagTypeProps) => {
    return (
        <p className={`w-2/5 mr-2 text-center border-l border-gray-50 rounded-sm ${styles[type]}`}>
            {capitalize(type)}
        </p>
    )
} 