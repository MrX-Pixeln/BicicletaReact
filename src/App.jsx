import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "./assets/components/MainLayout";

import Introducao from "./assets/components/Introducao";
import BicicletasListas from "./assets/components/BicicletasListas";
import Tecnologia from "./assets/components/Tecnologia";
import Parceiros from "./assets/components/Parceiros";
import Depoimentos from "./assets/components/Depoimentos";
import Seguros from "./assets/components/Seguros";

import TermoPrivacidade from "./assets/pages/TermoPrivacidade";
import TermosDeUso from "./assets/pages/TermosDeUso";
import TermosDeUsuario from "./assets/pages/TermosDeUsuario";
import NotFound from "./assets/pages/NotFound";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {/* Todas as rotas com Header e Footer dentro de MainLayout */}
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <Introducao />
              <BicicletasListas />
              <Tecnologia />
              <Parceiros />
              <Depoimentos />
              <Seguros />
            </>
          }
        />
        <Route path="/bicicletas" element={<BicicletasListas />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/termo-privacidade" element={<TermoPrivacidade />} />
        <Route path="/termos-uso" element={<TermosDeUso />} />
        <Route path="/termos-usuario" element={<TermosDeUsuario />} />
      </Route>

      {/* Página 404 isolada, sem header/footer */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
