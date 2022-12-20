import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const Subheader = ({ title }) => {
  const styles = {
    header: css`
      background: #fff;
      padding: 1rem;
      width: 35vw;
      @media (max-width: 750px) {
        width: 50vw;
        font-size: 20px;
      }
    `,
    text: css`
      text-align: center;
      font-size: 35px;
      font-weight: bold;
      @media (max-width: 750px) {
        font-size: 25px;
      }
    `,
  };
  return (
    <Box sx={styles.header}>
      <Typography sx={styles.text}> {title}</Typography>
    </Box>
  );
};

export default Subheader;
