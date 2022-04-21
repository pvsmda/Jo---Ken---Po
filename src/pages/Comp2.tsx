import { usePlayContext } from "../hooks";

import { Box } from "@mui/material";
import { BoxApp } from "../styles/styles";

export const Comp2 = () => {
  const { opPc2, bgBox3 } = usePlayContext();

  return (
    <>
      {opPc2 !== null && (
        <BoxApp bgcolor={bgBox3}>
          {opPc2 === 0 ? (
            <Box>
              <img src="pedra.png" width="75px" alt="Pedra" />
            </Box>
          ) : opPc2 === 1 ? (
            <Box>
              <img src="papel.png" width="75px" alt="Papel" />
            </Box>
          ) : opPc2 === 2 ? (
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
