import React from "react";
import { Typography, Box } from "@mui/material";
import { css } from "@emotion/react";
import MMT from "../../../assets/MMT.svg";
const landing = () => {
  const styles = {
    landingContainer: css`
      height: 90vh;
      display: flex;
      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
    `,
    leftContainer: css`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    headerText: css`
      font-size: 24px;
      color: #fff;
      text-align: center;
      font-weight: bold;
    `,
    paraText: css`
      color: #fff;
      text-align: center;
      margin-top: 5px;
    `,
    imgContainer: css`
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };

  return (
    <Box sx={styles.landingContainer}>
      <Box sx={styles.leftContainer}>
        <Typography sx={styles.headerText}>
          Welcome to Michigan Made Trucking!
        </Typography>
        <Typography sx={styles.paraText}>
          Here at Michigan Made Trucking LLC we treat everyone with the respect
          you deserve
        </Typography>
      </Box>

      <Box sx={styles.imgContainer}>
        <img src={MMT} alt="michigan made trucking" width="200" height="300" />
      </Box>
    </Box>
  );
};

export default landing;