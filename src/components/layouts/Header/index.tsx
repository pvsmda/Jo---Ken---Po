import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePlayContext } from "../../../hooks";
import { Btn1 } from "../../../styles/styles";

export const Header = () => {
  const navigate = useNavigate();
  const { opPc1, opPc2 } = usePlayContext();

  const handlePage = (p: string) => {
    switch (p) {
      case "placar":
        navigate("/placar");
        break;
      case "rodadas":
        navigate("/rodadas");
        break;

      default:
        navigate("/");
    }
  };

  return (
    <Container sx={{ m: 4 }}>
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <Box>
            <Btn1 variant="outlined" onClick={() => handlePage("home")}>
              Jo - Ken - Pô
            </Btn1>
          </Box>

          {opPc1 !== null && opPc2 !== null && (
            <Box display="flex" marginLeft="auto">
              <Btn1 variant="outlined" onClick={() => handlePage("placar")}>
                Placar
              </Btn1>

              <Btn1 variant="outlined" onClick={() => handlePage("rodadas")}>
                Rodadas
              </Btn1>

              <Btn1 variant="outlined" href="/">
                Novo Jogo
              </Btn1>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};
