// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{ py: 2, backgroundColor: "#222", color: "white", textAlign: "center" }}
  >
    <Typography>
      © {new Date().getFullYear()} Celebrating Omani National Day
    </Typography>
  </Box>
);

export default Footer;
