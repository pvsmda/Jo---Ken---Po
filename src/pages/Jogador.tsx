import { usePlayContext } from "../hooks";

import { BoxApp, Btn } from "../styles/styles";

export const Jogador = () => {
  const { play, bgBox1 } = usePlayContext();

  return (
    <BoxApp bgcolor={bgBox1}>
      <Btn type="submit" onClick={() => play(0)}>
        <img src="pedra.png" width="75px" alt="Pedra" />
      </Btn>
      <Btn type="submit" onClick={() => play(1)}>
        <img src="papel.png" width="75px" alt="Papel" />
      </Btn>
      <Btn type="submit" onClick={() => play(2)}>
        <img src="tesoura.png" width="75px" alt="Tesoura" />
      </Btn>
    </BoxApp>
  );
};
