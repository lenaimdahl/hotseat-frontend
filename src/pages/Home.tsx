import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Card
      style={{ width: "100%", maxWidth: 400, margin: "auto", marginTop: 50 }}
    >
      <CardContent>
        <Typography variant="h6">Hotseat Connect - Dein Spiel!</Typography>
        <Stack>
          <Button variant="outlined" color="primary" style={{ marginTop: 30 }}>
            <Link to="/lobby">Erstelle Lobby</Link>
          </Button>
          <br />
          <Button variant="contained" color="secondary">
            <Link to="/game">Spiel beitreten</Link>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
