import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const Contact = () => {
  const styles = {
    container: css`
      border: 0.1rem solid #fff;
      width: 50vw;
      margin: auto;
      margin-top: 50px;
      @media (max-width: 750px) {
        width: 90vw;
      }
    `,
    text: css`
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    `,
  };
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>Location: Grand Rapids,MI</Typography>
      <Typography sx={styles.text}>
        Email: michiganmadetruckingllc@gmail.com
      </Typography>
      <Typography sx={styles.text}>Phone: 616-466-4080</Typography>
    </Box>
  );
};

export default Contact;
