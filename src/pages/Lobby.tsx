import React, { useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography, Box, TextField } from "@mui/material";
import { BackendAPI } from "../service/ApiHandler";

const backendAPI = new BackendAPI();

const Lobby: React.FC = () => {
  const navigate = useNavigate();
  const { lobbyCode } = useParams<{ lobbyCode: string }>();
  const [userName, setUserName] = useState<string>("");

  if (!lobbyCode) {
    return <Typography>Kein Lobby-Code gefunden.</Typography>;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handleJoinGame = async (lobbyCode: string, userName: string) => {
    try {
      const { user } = await backendAPI.joinUser(lobbyCode, userName);
      console.log("Erstellter User:", user);

      if (!user) {
        throw new Error("Kein user erhalten");
      }
      navigate(`/lobby/${lobbyCode}/game`, {
        state: { user },
      });
    } catch (error) {
      console.error("Fehler beim Hinzufügen eines users zur Lobby.", error);
    }
    setUserName("");
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
        Lobby-Code: <strong>{lobbyCode}</strong>
      </Typography>
      <TextField
        variant="outlined"
        color="info"
        label="Gib deinen Namen ein"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleJoinGame(lobbyCode, userName);
        }}
        placeholder="Dein Name"
        style={{ marginTop: "20px", width: "300px", backgroundColor: "#fff" }}
      ></TextField>
    </Box>
  );
};

export default Lobby;
