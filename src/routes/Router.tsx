import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Lobby from "../pages/Lobby.tsx";
import Game from "../pages/Games.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
