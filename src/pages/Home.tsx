import React, { useState } from "react";
import type { ChangeEvent } from "react";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
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
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          🔥 HotSeat Connect
        </Typography>
        <Typography variant="h6">
          Starte ein Spiel oder trete einer Lobby bei
        </Typography>

        <Stack spacing={3} mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateLobby}
          >
            Lobby erstellen
          </Button>

          {!showInputField ? (
            <Button
              variant="outlined"
              color="secondary"
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
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleJoinGame();
                }}
              />
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleJoinGame}
                disabled={!lobbyCode}
              >
                Beitreten
              </Button>
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Home;
