import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Stack
      style={{
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header style={{ padding: 16, backgroundColor: "#eee" }}>
        <h1>Meine App</h1>
      </header>
      <main
        style={{
          padding: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </main>
      <footer style={{ padding: 16, backgroundColor: "#eee" }}>
        &copy; 2025 Mein Spiel
      </footer>
    </Stack>
  );
}
