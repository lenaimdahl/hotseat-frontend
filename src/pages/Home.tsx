import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackendAPI } from "../service/ApiHandler";

const backendAPI = new BackendAPI();

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [lobbyCode, setLobbyCode] = useState<string>("");
  const [showInputField, setShowInputField] = useState<boolean>(false);

  const handleCreateLobby = async () => {
    try {
      const { code } = await backendAPI.createLobby();
      console.log("Erstellter Lobby-Code:", code);
      if (!code) throw new Error("Kein Lobby-Code erhalten");
      navigate(`/game/${code}`);
    } catch (err) {
      console.error("Fehler beim Erstellen der Lobby:", err);
    }
  };

  const handleJoinGame = (): void => {
    if (lobbyCode.trim()) {
      navigate(`/game/${lobbyCode.trim().toUpperCase()}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLobbyCode(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" style={{ textAlign: "center", color: "#fff" }}>
        🔥 HotSeat Zone
      </Typography>

      <Stack spacing={5} sx={{ maxWidth: 600, mx: "auto", mt: 10 }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FF00C8",
            color: "#fff",
            padding: "20px 20px",
            borderRadius: "16px",
          }}
          onClick={handleCreateLobby}
        >
          Lobby erstellen
        </Button>
        {!showInputField ? (
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#D633FF",
              color: "#fff",
              padding: "20px 20px",
              borderRadius: "16px",
            }}
            onClick={() => setShowInputField(true)}
          >
            Spiel beitreten
          </Button>
        ) : (
          <>
            <TextField
              label="Lobby-Code eingeben"
              variant="outlined"
              value={lobbyCode}
              style={{
                backgroundColor: "#FFA726",
                color: "#fff",
                borderRadius: "16px",
              }}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleJoinGame();
              }}
            />
            <Button
              variant="outlined"
              style={{
                backgroundColor: "#8E44AD",
                color: "#fff",
                borderRadius: "10px",
              }}
              onClick={handleJoinGame}
              disabled={!lobbyCode}
            >
              Beitreten
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Home;
