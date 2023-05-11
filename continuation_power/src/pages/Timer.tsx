import React, { useState, useEffect } from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import { formatTime } from "../components/common";

const Timer = () => {
  const [isStart, setIsStart] = useState(false);
  const [count, setCount] = useState(1);
  const incrementTimer = () => {
    setCount((state) => ++state);
  };
  const decrementTimer = () => {
    setCount((state) => --state);
  };

  useEffect(() => {
    if (isStart && count > 0) {
      const interval = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (count === 0) {
      setIsStart(false);
    }
  }, [isStart, count]);

  const startTimer = () => {
    setIsStart(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <div>Timer</div>
      <Box sx={{ display: "flex" }}>
        <Button onClick={decrementTimer} variant="contained">
          -
        </Button>
        <Typography sx={{ mx: 2 }}>{formatTime(count)}</Typography>
        <Button onClick={incrementTimer} variant="contained">
          +
        </Button>
      </Box>
      <Button sx={{ mt: 2 }} variant="contained" onClick={startTimer}>
        START
      </Button>
    </Container>
  );
};

export default Timer;
