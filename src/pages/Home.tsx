import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [joinCode, setJoinCode] = useState<string>("");
  const [showJoinInput, setShowJoinInput] = useState<boolean>(false);

  const handleCreateLobby = (): void => {
    const lobbyId: string = uuidv4().slice(0, 6).toUpperCase();
    navigate(`/game/${lobbyId}`);
  };

  const handleJoinGame = (): void => {
    if (joinCode.trim()) {
      navigate(`/game/${joinCode.trim().toUpperCase()}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setJoinCode(e.target.value);
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mt: 10,
        textAlign: "center",
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          🔥 HotSeat Connect
        </Typography>
        <Typography variant="body1" gutterBottom>
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

          {!showJoinInput ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setShowJoinInput(true)}
            >
              Spiel beitreten
            </Button>
          ) : (
            <>
              <TextField
                label="Lobby-Code eingeben"
                variant="outlined"
                value={joinCode}
                onChange={handleInputChange}
              />
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleJoinGame}
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
