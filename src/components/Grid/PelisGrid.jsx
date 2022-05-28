import ImageList from "@mui/material/ImageList";
import movies from "../../movies.json";
import { PelisCard } from "../Card/PelisCard";

export function PelisGrid({ selectedMovie }) {
  console.log(selectedMovie);
  return (
    <ImageList cols={4} gap={24}>
      {selectedMovie ? (
        <PelisCard movie={selectedMovie} />
      ) : (
        movies.map((movie) => <PelisCard key={movies.id} movie={movie} />)
      )}
    </ImageList>
  );
}
