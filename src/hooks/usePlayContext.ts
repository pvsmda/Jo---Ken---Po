import { useContext } from "react";
import { PlayContext } from "../contexts";

export const usePlayContext = () => {
  return useContext(PlayContext);
};
