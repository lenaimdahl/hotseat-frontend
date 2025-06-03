import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Layout from "../components/Layout.tsx";
import GameLobby from "../pages/GameLobby.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/game/:lobbyId" element={<GameLobby />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
