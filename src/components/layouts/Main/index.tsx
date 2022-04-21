import { Box } from "@mui/material";

type MainProps = {
  children: React.ReactNode;
};

export const MainPage = ({ children }: MainProps) => {
  return <Box sx={{ m: 0, p: 4 }}>{children}</Box>;
};
