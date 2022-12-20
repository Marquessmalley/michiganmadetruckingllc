import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const About = () => {
  const styles = {
    about: css`
      width: 80vw;
      margin: auto;
      margin-top: 50px;
    `,
    text: css`
      font-size: 20px;
      color: #fff;
    `,
  };
  return (
    <Box sx={styles.about}>
      <Typography sx={styles.text}>
        Michigan Made trucking LLC was created by myself after being a driver
        for many years for other companies and still felt as if I wasn’t where I
        should be financially. My dream was to own and run an independent
        successful trucking company and pay the people that do most of the work
        (the drivers) a wage that makes sense. and treat our customers and our
        employees with respect and honesty. As a driver myself I know that
        communication is key to any successful relationship. And if you want an
        experienced, down to earth, hardworking, honest partner in this
        dog-eat-dog world of trucking, give me a call.
      </Typography>
    </Box>
  );
};

export default About;
