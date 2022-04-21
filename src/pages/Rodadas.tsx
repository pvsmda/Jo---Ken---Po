import { usePlayContext } from "../hooks";

import { Box, Paper, Typography } from "@mui/material";
import { Box4 } from "../styles/styles";

export const Rodadas = () => {
  const { rounds } = usePlayContext();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Pontos por Rodada</Typography>

      {rounds.length > 0 ? (
        <>
          {rounds.map(
            (rod) =>
              rod.round > 0 && (
                <Box4 key={rod.id}>
                  <Paper>
                    <Typography variant="h6">{rod.round}</Typography>
                    <Typography>Jogador: {rod.player} pts</Typography>
                    <Typography>Computador 1: {rod.pc1} pts</Typography>
                    <Typography>Computador 2: {rod.pc2} pts</Typography>
                  </Paper>
                </Box4>
              )
          )}
        </>
      ) : (
        <Box4>
          <Paper>
            <Typography variant="h6"> 0</Typography>
            <Typography>Jogador: 0</Typography>
            <Typography>Computador 1: 0</Typography>
            <Typography>Computador 2: 0</Typography>
          </Paper>
        </Box4>
      )}
    </Box>
  );
};
