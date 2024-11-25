// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary router components
import { CssBaseline, Box, Typography } from "@mui/material";
import Countdown from "./components/Countdown";
import HomePage from "./screens/Home"; // Import the HomePage component
import WebsitePage from "./website";

function App() {
  const generateBackgroundText = () => {
    const lines = [];
    for (let i = 0; i < 20; i++) {
      const opacity = 0.45 - i * 0.015; // Gradual decrease in opacity
      lines.push(
        <Typography
          key={i}
          sx={{
            fontSize: { xs: "60px", sm: "80px", md: "114px" }, // Responsive font size
            color: `rgba(49, 48, 46, ${opacity})`, // Adjusting opacity
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "0.2em",
            lineHeight: { xs: "60px", sm: "80px", md: "114px" }, // Responsive line height
            fontFamily: "'The Seasons', serif", // Updated font family
          }}
        >
          COUNTDOWN
        </Typography>
      );
    }
    return lines;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Box sx={{ backgroundColor: "#ddd5ca" }}>
              <Countdown />
            </Box>
          }
        />
        <Route path="/screens/Home" element={<HomePage />} />
        <Route path="/website" element={<WebsitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
