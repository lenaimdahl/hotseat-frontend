import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Layout from "../components/Layout.tsx";
import Lobby from "../pages/Lobby.tsx";
import Game from "../pages/Game.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lobby/:lobbyId" element={<Lobby />} />
          <Route path="/lobby/:lobbyId/game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
