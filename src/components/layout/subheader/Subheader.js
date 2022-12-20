import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const Subheader = ({ title }) => {
  const styles = {
    header: css`
      background: #fff;
      padding: 1.3rem;
      width: 35vw;
    `,
    text: css`
      text-align: center;
      font-size: 35px;
      font-weight: bold;
    `,
  };
  return (
    <Box sx={styles.header}>
      <Typography sx={styles.text}> {title}</Typography>
    </Box>
  );
};

export default Subheader;
