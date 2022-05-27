import styles from "./PelisCard.module.css";

export function PelisCard({movie}) {
    console.log(styles);
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return ( 
    <li className={styles.PelisCard}>
        <img  
        width={230}
        height={345}
        className = {styles.movieImage} 
        src={imageUrl} 
        alt = {movie.title} 
        />
        <div>{movie.title}</div>
        </li>
        );
}