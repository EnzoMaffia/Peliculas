import ImageList from "@mui/material/ImageList";
import { PelisCard } from "components/Card/PelisCard";
import movies from "../../movies.json";

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
