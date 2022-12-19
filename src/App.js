import Navbar from "./components/layout/Navbar/Navbar";
import Landing from "./components/sections/landing/Landing";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
function App() {
  const styles = {
    app: css`
      background: rgb(0, 0, 77, 0.9);
      height: 100vh;
    `,
  };
  return (
    <Box sx={styles.app}>
      <Navbar />
      <Landing />
    </Box>
  );
}

export default App;
