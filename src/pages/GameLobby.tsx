import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const GameLobby: React.FC = () => {
  const { lobbyId } = useParams<{ lobbyId: string }>();

  if (!lobbyId) {
    return <Typography>Kein Lobby-Code gefunden.</Typography>;
  }

  return (
    <Box
      sx={{
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Willkommen im Spiel!</Typography>
      <Typography variant="h6" style={{ color: "#FF00C8", marginTop: "20px" }}>
        Lobby-Code: <strong>{lobbyId}</strong>
      </Typography>
    </Box>
  );
};

export default GameLobby;
