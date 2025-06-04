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
        backgroundColor: "#2C085F",
        top: 0,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <main
        style={{
          paddingTop: 90,
        }}
      >
        <Outlet />
      </main>
    </Box>
  );
}
