import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

const GameLobby: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  if (!gameId) {
    return <Typography>Kein Lobby-Code gefunden.</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 10, p: 3, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h4">Willkommen im Spiel!</Typography>
        <Typography variant="h6">
          Lobby-Code: <strong>{gameId}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameLobby;
