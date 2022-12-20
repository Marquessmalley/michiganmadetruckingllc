import React from "react";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
const Services = () => {
  const styles = {
    service: css`
      width: 80vw;
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
    `,
    text: css`
      font-size: 20px;
      color: #fff;
    `,
  };
  return (
    <Box id="about" sx={styles.service}>
      <Typography sx={styles.text}>
        We’re seeking successful, business-minded driver /owner-operators, that
        wants to be in control of where you go and when you want to go there.
        Your income depends on you. If this describes you, we look forward to
        welcoming you to our growing team! As a driver/owner-operator, you’ll
        have an assigned dispatcher who has been a carrier themselves, which
        makes it a lot easier to understand you needs. Michigan Made Trucking
        LLC operates under a no-holds policy. If all of your paperwork is in on
        Thursday, your paycheck will be direct-deposited on Friday. For more
        information on becoming part of the Michigan Made Trucking LLC family,
        please give us a call or email
      </Typography>
    </Box>
  );
};

export default Services;
