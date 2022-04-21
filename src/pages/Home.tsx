import { Comp1, Comp2, Jogador } from ".";
import { usePlayContext } from "../hooks";

import { Grid, Box, Alert, Typography, Paper } from "@mui/material";
import { Box5, Box6 } from "../styles/styles";

export const Home = () => {
  const { msg, opPc1, opPc2 } = usePlayContext();

  return (
    <Box sx={{ p: 2 }}>
      <Grid container direction="row" spacing={1}>
        {opPc1 === null || opPc2 === null ? (
          <>
            <Grid item xs={12} md={12}>
              <Alert sx={{ p: 1 }} severity="info">
                Clique em um dos botões abaixo para começar!
              </Alert>
            </Grid>

            <Grid item xs={12} md={12}>
              <Jogador />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={12}>
              {msg.length > 0 ? (
                <Box>
                  <Alert severity="warning">{msg}</Alert>
                </Box>
              ) : (
                <Box6 sx={{ p: 0, mb: 1 }}>
                  <Alert sx={{ p: 1 }}>
                    <Typography>
                      Para recomeçar, clique em "Novo Jogo" e para voltar,
                      clique em "Jo-ken-pô"! Legenda:
                    </Typography>
                  </Alert>
                  <Box5>
                    <Typography color="#FF8A8A">perdeu</Typography>
                    <Typography>,</Typography>
                    <Typography color="#32a4a8">01 ponto</Typography>
                    <Typography>e</Typography>
                    <Typography color="#155052">02 pontos</Typography>
                    <Typography>.</Typography>
                  </Box5>
                </Box6>
              )}
            </Grid>

            <Grid item xs={6} md={6}>
              <Box>
                <Box sx={{ p: 1 }}>PC 1:</Box>

                <Comp1 />
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box>
                <Box sx={{ p: 1 }}>PC 2:</Box>
                <Comp2 />
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box6>
                <Box sx={{ p: 1 }}>Jogador</Box>
                <Jogador />
              </Box6>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};
