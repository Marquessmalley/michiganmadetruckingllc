import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import truck1 from "../../../assets/truck1.png";
const About = () => {
  const styles = {
    about: css`
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      @media (max-width: 1100px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
    text: css`
      width: 50vw;
      font-size: 20px;
      color: #fff;
      text-align: justify;
      @media (max-width: 1100px) {
        margin-bottom: 3rem;
        width: 80vw;
      }
    `,
  };
  return (
    <Box id="about" sx={styles.about}>
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
      <img src={truck1} alt="truck" width="400" height="400" />
    </Box>
  );
};

export default About;
