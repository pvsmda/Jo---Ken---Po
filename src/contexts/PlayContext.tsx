import { useState, useRef, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { api } from "../services";

type Round = {
  id?: string;
  player: number;
  pc1: number;
  pc2: number;
  round: number;
};

interface PlayContextData {
  opPlayer: number;
  opPc1: number;
  opPc2: number;
  msg: string;
  contPlayer: number;
  contPc1: number;
  contPc2: number;
  bgBox1: string;
  bgBox2: string;
  bgBox3: string;
  rounds: Round[];
  play: (num: number) => Promise<void>;
}

export const PlayContext = createContext<PlayContextData>(
  {} as PlayContextData
);

export const PlayProvider: React.FC = ({ children }) => {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [opPlayer, setOpPlayer] = useState(null);
  const [opPc1, setOpPc1] = useState(null);
  const [opPc2, setOpPc2] = useState(null);
  const [msg, setMsg] = useState("");
  const [contPlayer, setContPlayer] = useState(0);
  const [contPc1, setContPc1] = useState(0);
  const [contPc2, setContPc2] = useState(0);
  const [n, setN] = useState(0);
  const [print, setPrint] = useState(0);
  const [bgBox1, setBgBox1] = useState("#e3e3e3");
  const [bgBox2, setBgBox2] = useState("#e3e3e3");
  const [bgBox3, setBgBox3] = useState("#e3e3e3");

  const prevPlayer = useRef(0);
  const prevPc1 = useRef(0);
  const prevPc2 = useRef(0);

  const [bgs, setBgs] = useState(["#FF8A8A", "#32a4a8", "#155052"]);

  useEffect(() => {
    if (n > 0) {
      if (opPlayer === opPc1 && opPc1 === opPc2) {
        setMsg("Jogadores Empataram");
      } else {
        setMsg("");

        comparePlayers(opPlayer, opPc1, setContPlayer, setContPc1);

        comparePlayers(opPlayer, opPc2, setContPlayer, setContPc2);

        comparePlayers(opPc1, opPc2, setContPc1, setContPc2);
      }

      prevPlayer.current = contPlayer;
      prevPc1.current = contPc1;
      prevPc2.current = contPc2;

      setPrint((prev) => prev + 1);
    }
  }, [n]);

  useEffect(() => {
    if (print > 0) {
      let ptsJog = contPlayer - prevPlayer.current;
      let ptsPc1 = contPc1 - prevPc1.current;
      let ptsPc2 = contPc2 - prevPc2.current;

      setRounds([
        {
          id: uuidv4(),
          round: n,
          player: ptsJog,
          pc1: ptsPc1,
          pc2: ptsPc2,
        },
        ...rounds,
      ]);

      ptsJog === 1
        ? setBgBox1(bgs[1])
        : ptsJog === 2
        ? setBgBox1(bgs[2])
        : setBgBox1(bgs[0]);

      ptsPc1 === 1
        ? setBgBox2(bgs[1])
        : ptsPc1 === 2
        ? setBgBox2(bgs[2])
        : setBgBox2(bgs[0]);

      ptsPc2 === 1
        ? setBgBox3(bgs[1])
        : ptsPc2 === 2
        ? setBgBox3(bgs[2])
        : setBgBox3(bgs[0]);
    }
  }, [print]);

  const comparePlayers = (
    a: number,
    b: number,
    setA: (prev: any) => void,
    setB: (prev: any) => void
  ) => {
    if ((a === 0 && b === 2) || (a === 1 && b === 0) || (a === 2 && b === 1)) {
      setA((prev: number) => prev + 1);
    }

    if ((b === 0 && a === 2) || (b === 1 && a === 0) || (b === 2 && a === 1)) {
      setB((prev: number) => prev + 1);
    }
  };

  const play = async (numb: number) => {
    await api
      .get("")
      .then((response) => {
        setOpPc1(response.data[0]);
        setOpPc2(response.data[1]);
      })
      .catch((error) => {
        console.log(error);
      });

    setOpPlayer(numb);

    setN((prev) => prev + 1);
  };

  return (
    <PlayContext.Provider
      value={{
        opPlayer,
        opPc1,
        opPc2,
        msg,
        contPlayer,
        contPc1,
        contPc2,
        bgBox1,
        bgBox2,
        bgBox3,
        rounds,
        play,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};
