// src/components/Banner.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => (
  <Box
    sx={{
      backgroundImage: "url(https://example.com/omani-flag.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      py: 8,
      textAlign: "center",
    }}
  >
    <Typography variant="h2" gutterBottom>
      Happy Omani National Day!
    </Typography>
    <Typography variant="h5">
      Celebrating the pride, heritage, and beauty of Oman
    </Typography>
  </Box>
);

export default Banner;
