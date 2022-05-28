import MenuIcon from "@mui/icons-material/Menu";
import { Autocomplete, Container, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { PelisGrid } from "./components/Grid/PelisGrid";
import movies from "./movies.json";
export function App() {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState();
  return (
    //  SE ENVUELVE TODO EN UN CONTAINER DE MATERIAL UI
    //   EL CUAL PASANDOLE POR PROPS "MAX WIDTH" ELEGIS EL TAMAÑO TOTAL
    //   QUE QUERS QUE OCUPE TU WEB
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, marginBottom: 12 }}>
        <AppBar color="primary" position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Peliculas
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={movies}
                getOptionLabel={(option) => option.title}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Buscar" />
                )}
              />
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* COMPONENTES */}
      <PelisGrid selectedMovie={value} />
    </Container>
  );
}
