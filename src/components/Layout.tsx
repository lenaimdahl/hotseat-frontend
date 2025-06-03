import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <main
        style={{
          padding: 16,
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          padding: 16,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eee",
          bottom: 0,
          position: "absolute",
        }}
      >
        &copy; 2025 Mein Spiel
      </footer>
    </Box>
  );
}
