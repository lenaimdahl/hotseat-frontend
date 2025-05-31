import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Typography>Willkommen bei unserem Spiel!</Typography>
        <Stack>
          <Button>
            <Link to="/lobby">Erstelle Lobby</Link>
          </Button>
          <br />
          <Button>
            <Link to="/game">Spiel beitreten</Link>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
