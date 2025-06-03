import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

const GameLobby: React.FC = () => {
  const { code } = useParams<{ code: string }>();

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 10, p: 3, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Willkommen im Spiel!
        </Typography>
        <Typography variant="h6">
          Lobby-Code: <strong>{code}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameLobby;
