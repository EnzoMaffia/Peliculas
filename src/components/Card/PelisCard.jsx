import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export function PelisCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <ImageListItem
      key={movie.id}
      sx={{
        marign: "auto",
      }}
    >
      <img src={imageUrl} srcSet={imageUrl} alt={movie.title} />
      <ImageListItemBar
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        title={movie.title}
        subtitle={<span>Release: {movie.release_date}</span>}
        position="below"
      />
    </ImageListItem>
  );
}
