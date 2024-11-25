// src/components/Countdown.js
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Function to calculate the initial time left
const calculateTimeLeft = () => {
  const difference =
    +new Date(`November 18, ${new Date().getFullYear()}`) - +new Date();

  const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((difference / 1000 / 60) % 60));
  const seconds = Math.max(0, Math.floor((difference / 1000) % 60));

  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const navigate = useNavigate(); // Hook to navigate to different routes
  const [language, setLanguage] = useState("en");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isCustomTime, setIsCustomTime] = useState(false); // Flag for custom countdown (3 seconds)

  // Effect hook to update the timer every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prev) => {
        if (
          prev.seconds === 0 &&
          prev.minutes === 0 &&
          prev.hours === 0 &&
          prev.days === 0
        ) {
          clearTimeout(timer); // Stop when the countdown reaches zero
          navigate("/screens/Home"); // Navigate to the home screen when countdown reaches zero
          return prev; // Optionally reset or do something else when the countdown ends
        }

        // Decrement the countdown time
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0 || prev.hours > 0 || prev.days > 0) {
          return {
            ...prev,
            seconds: 59,
            minutes: prev.minutes > 0 ? prev.minutes - 1 : 59,
            hours: prev.hours > 0 ? prev.hours - 1 : 23,
            days: prev.days > 0 ? prev.days - 1 : 0,
          };
        }

        return prev;
      });
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [timeLeft, navigate]); // Include navigate in dependency array

  const renderDigit = (value) => (
    <Box
      sx={{
        backgroundColor: "#474644",
        borderRadius: 2,
        width: { xs: 50, sm: 60 },
        height: { xs: 70, sm: 80 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 5px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#e0c2a8",
          fontWeight: "bold",
          fontFamily: "'The Seasons', serif",
        }}
      >
        {value}
      </Typography>
    </Box>
  );

  const renderLabel = (label) => (
    <Typography
      sx={{
        marginTop: "5px",
        color: "#31302e",
        fontSize: { xs: "12px", sm: "14px" },
        fontWeight: "bold",
        textAlign: "center",
        fontFamily:
          language === "en" ? "'The Seasons', serif" : "'Amiri', serif",
      }}
    >
      {label}
    </Typography>
  );

  const handleLanguageToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  const labels = {
    en: {
      title: "Oman National Day",
      comingSoon: "Coming Soon!",
      day: "Day",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    ar: {
      title: "اليوم الوطني العماني",
      comingSoon: "!قريبا",
      day: "يوم",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",
    },
  };

  // New button handler to set the countdown to 3 seconds
  const handleSetToThreeSeconds = () => {
    setTimeLeft({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 3,
    });
    setIsCustomTime(true); // Start the custom 3-second countdown
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ddd5ca",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 4,
        position: "relative",
        overflow: "hidden", // Prevent content overflow
      }}
    >
      {/* Background text "COUNTDOWN" with opacity change */}
      {[...Array(20)].map((_, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: { xs: "60px", sm: "80px", md: "114px" }, // Responsive font size
            color: `rgba(49, 48, 46, ${0.45 - index * 0.02})`, // Opacity decreases as we go down
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: "0.2em",
            lineHeight: { xs: "60px", sm: "80px", md: "114px" },
            fontFamily: "'The Seasons', serif", // The Seasons font family
            position: "absolute",
            top: `${index * 10}%`, // Position text vertically
            zIndex: 0, // Send text to background
          }}
        >
          COUNTDOWN
        </Typography>
      ))}

      {/* Language Toggle Button */}
      <Button
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "#31302e",
          color: "#e0c2a8",
          fontFamily: "'The Seasons', serif",
          "&:hover": {
            backgroundColor: "#474644",
          },
        }}
        onClick={handleLanguageToggle}
      >
        {language === "en" ? "تغيير اللغة" : "Change Language"}
      </Button>

      {/* Centered Countdown Container */}
      <Box
        sx={{
          backgroundColor: "#ddd5ca",
          width: { xs: "90%", sm: 713 }, // Responsive width for small screens
          height: { xs: "auto", sm: 379.9 }, // Responsive height
          borderRadius: "15%", // Circular corners
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          padding: { xs: 2, sm: 4 },
        }}
      >
        {/* Greeting Text inside the container */}
        <Typography
          variant="h5"
          sx={{
            color: "#31302e",
            fontFamily:
              language === "en" ? "'The Seasons', serif" : "'Amiri', serif",
            fontWeight: "bold",
            marginTop: 2,
            textAlign: "center",
            width: "100%",
            paddingX: 4,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
          }}
        >
          {language === "ar"
            ? "تهنئة من أم حميد بمناسبة"
            : "Greeting from Um Humaid on the occasion of"}
        </Typography>

        {/* Oman National Day title */}
        <Typography
          variant="h3"
          sx={{
            color: "#31302e",
            fontFamily:
              language === "en" ? "'The Seasons', serif" : "'Amiri', serif",
            fontWeight: "bold",
            letterSpacing: language === "en" ? 4 : 0,
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
          }}
        >
          {labels[language].title}
        </Typography>

        {/* Coming Soon message */}
        <Typography
          variant="h4"
          sx={{
            color: "#31302e",
            fontFamily:
              language === "en" ? "'The Seasons', serif" : "'Amiri', serif",
            fontWeight: "bold",
            marginTop: 1,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          }}
        >
          {labels[language].comingSoon}
        </Typography>

        {/* Countdown container */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 4 }}
        >
          <Box sx={{ textAlign: "center", margin: "0 10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {renderDigit(Math.floor(timeLeft.days / 10))}
              {renderDigit(timeLeft.days % 10)}
            </Box>
            {renderLabel(labels[language].day)}
          </Box>
          <Box sx={{ textAlign: "center", margin: "0 10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {renderDigit(Math.floor(timeLeft.hours / 10))}
              {renderDigit(timeLeft.hours % 10)}
            </Box>
            {renderLabel(labels[language].hours)}
          </Box>
          <Box sx={{ textAlign: "center", margin: "0 10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {renderDigit(Math.floor(timeLeft.minutes / 10))}
              {renderDigit(timeLeft.minutes % 10)}
            </Box>
            {renderLabel(labels[language].minutes)}
          </Box>
          <Box sx={{ textAlign: "center", margin: "0 10px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {renderDigit(Math.floor(timeLeft.seconds / 10))}
              {renderDigit(timeLeft.seconds % 10)}
            </Box>
            {renderLabel(labels[language].seconds)}
          </Box>
        </Grid>

        {/* Button to start 3-second countdown */}
        <Button
          onClick={handleSetToThreeSeconds}
          sx={{
            backgroundColor: "#31302e",
            color: "#e0c2a8",
            marginTop: 4,
            padding: "10px 20px",
            fontFamily: "'The Seasons', serif",
            "&:hover": {
              backgroundColor: "#474644",
            },
          }}
        >
          Start 3 Seconds Countdown
        </Button>
      </Box>
    </Box>
  );
};

export default Countdown;
