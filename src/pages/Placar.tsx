import { usePlayContext } from "../hooks";

import { Box, Paper, Typography } from "@mui/material";
import { Box4 } from "../styles/styles";

export const Placar = () => {
  const { contPlayer, contPc1, contPc2 } = usePlayContext();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4">Placar</Typography>

      <Box4>
        <Paper>
          <Typography variant="h6">Jogador: {contPlayer} pts</Typography>
          <Typography variant="h6">Computador 1: {contPc1} pts</Typography>
          <Typography variant="h6">Computador 2: {contPc2} pts</Typography>
        </Paper>
      </Box4>
    </Box>
  );
};
