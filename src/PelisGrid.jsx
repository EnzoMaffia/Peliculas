import { PelisCard } from "./PelisCard";
import movies from "./movies.json";
import styles from "./PelisGrid.module.css";

export function PelisGrid(){
    return (
        <ul className={styles.PelisGrid}>
            {movies.map((movie) => (
               <PelisCard key={movies.id} movie={movie}/>
            ))}
        </ul>
    );
}