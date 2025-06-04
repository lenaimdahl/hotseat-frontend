import React, { useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Box, TextField } from "@mui/material";

const Lobby: React.FC = () => {
  const navigate = useNavigate();
  const { lobbyId } = useParams<{ lobbyId: string }>();
  const [userName, setUserName] = useState<string>("");

  if (!lobbyId) {
    return <Typography>Kein Lobby-Code gefunden.</Typography>;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handleJoinGame = (): void => {
    if (lobbyId.trim()) {
      navigate(`/lobby/${lobbyId}/game`, {
        state: { userName: userName.trim() },
      });
    } else {
      console.error("Lobby-ID ist leer oder ungültig.");
    }
    setUserName(""); // Reset the input field after joining
  };

  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Willkommen im Spiel!</Typography>
      <Typography variant="h6" style={{ color: "#FF00C8", marginTop: "20px" }}>
        Lobby-Code: <strong>{lobbyId}</strong>
      </Typography>
      <TextField
        variant="outlined"
        color="info"
        label="Gib deinen Namen ein"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleJoinGame();
        }}
        placeholder="Dein Name"
        style={{ marginTop: "20px", width: "300px", backgroundColor: "#fff" }}
      ></TextField>
    </Box>
  );
};

export default Lobby;
