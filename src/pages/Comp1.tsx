import { usePlayContext } from "../hooks";

import { Box } from "@mui/material";
import { BoxApp } from "../styles/styles";

export const Comp1 = () => {
  const { opPc1, bgBox2 } = usePlayContext();

  return (
    <>
      {opPc1 !== null && (
        <BoxApp bgcolor={bgBox2}>
          {opPc1 === 0 ? (
            <Box>
              <img src="pedra.png" width="75px" alt="Pedra" />
            </Box>
          ) : opPc1 === 1 ? (
            <Box>
              <img src="papel.png" width="75px" alt="Papel" />
            </Box>
          ) : opPc1 === 2 ? (
            <Box>
              <img src="tesoura.png" width="75px" alt="Tesoura" />
            </Box>
          ) : (
            <Box></Box>
          )}
        </BoxApp>
      )}
    </>
  );
};
