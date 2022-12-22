import Navbar from "./components/layout/Navbar/Navbar";
import Subheader from "./components/layout/subheader/Subheader";
import Landing from "./components/sections/landing/Landing";
import About from "./components/sections/about/About";
import Service from "./components/sections/services/Services";
import Contact from "./components/sections/contact/Contact";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
function App() {
  const styles = {
    app: css`
      background: rgb(0, 0, 77, 0.9);
      /* height: 275vh; */
      @media (max-width: 600px) {
        height: 425vh;
      }
    `,
  };
  return (
    <Box sx={styles.app}>
      <Navbar />
      <Landing />
      <section id="About">
        <Subheader title="About" />
        <About />
      </section>
      <section id="Services">
        <Subheader title="What we're looking for?" />
        <Service />
      </section>
      <section id="Contact">
        <Subheader title="Contact" />
        <Contact />
      </section>
    </Box>
  );
}

export default App;
