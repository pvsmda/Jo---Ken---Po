import styled from "@emotion/styled";
import { Button, Box, Paper } from "@mui/material";

interface BgProps {
  bg: string;
}

export const Btn = styled(Button)`
  display: flex;
  border-radius: 50%;
  width: 175px;
  height: 175px;
  margin: 2 auto;
  padding: 2px;
  background: white;

  &:hover {
    background: blue;
  }

  @media (max-width: 650px) {
    width: 85px;
    height: 85px;
  }
`;

export const Btn1 = styled(Button)`
  display: flex;
  margin-left: auto;

  color: white;

  &:hover {
    border: 1px solid #fff;
  }

  @media (max-width: 650px) {
    font-size: 10px;

    &:hover {
      border: 1px solid #fff;
    }
  }
`;

export const BoxApp = styled((props: any) => (
  <Box sx={{ bgcolor: { className: "bg" } }} {...props} />
))`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  padding: 6px;
  height: 200px;
  align-items: center;

  justify-content: space-around;

  @media (max-width: 650px) {
    height: 100px;
  }

  background: ${(props) => props.bgcolor};
`;

export const Box2 = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
  margin: 5px 0;
  padding: 6px;
  justify-content: space-between;
`;

export const Box3 = styled(Box)`
  border: 0.5px solid black;
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
`;

export const Box4 = styled(Box)`
  border-radius: 5%;
  margin: 15px 0;
  padding: 6px;
`;

export const Box5 = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;

export const Box6 = styled(Paper)`
  border: 1px solid #ccc;
`;
