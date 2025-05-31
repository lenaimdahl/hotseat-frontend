import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link to="/lobby">Erstelle Lobby</Link>
      <br />
      <Link to="/game">Spiel beitreten</Link>
    </div>
  );
}
