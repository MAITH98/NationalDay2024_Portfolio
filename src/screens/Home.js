import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Define keyframes for entry and exit animations
const homePageAnimation = {
  "@keyframes fadeInScale": {
    "0%": {
      opacity: 0, // Start as invisible
      transform: "scale(0.8)", // Start smaller
    },
    "100%": {
      opacity: 1, // End as fully visible
      transform: "scale(1)", // End at normal size
    },
  },

  "@keyframes fadeOutTranslate": {
    "0%": {
      opacity: 1, // Start as visible
      transform: "scale(1) translateX(0)", // Start at normal size and position
    },
    "100%": {
      opacity: 0, // End as invisible
      transform: "scale(0.8) translateX(100%)", // Shrink and exit to the right
    },
  },
};

const HomePage = () => {
  const navigate = useNavigate();

  // Trigger the navigation after the exit animation
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/website"); // Navigate to the website page after animation completes
    }, 3000); // Match the duration of the exit animation (1.5 seconds)

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <Box
      sx={{
        backgroundColor: "#ddd5ca",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        animation: "fadeInScale 1s ease-out", // Apply the entry animation
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/welcome.jpg`} // Correct path to image in the public folder
        alt="Centered Image"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          animation: "fadeOutTranslate 1.5s ease-in-out 1s forwards", // Apply exit animation with a delay
        }}
      />
    </Box>
  );
};

export default HomePage;
