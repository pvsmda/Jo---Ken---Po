import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Placar, Rodadas } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rodadas" element={<Rodadas />} />
      <Route path="/placar" element={<Placar />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
