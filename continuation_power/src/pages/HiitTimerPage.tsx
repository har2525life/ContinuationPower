import { Container, Typography, Button, Box } from "@mui/material";
import ExercisePage from "../components/HIIT/ExercisePage";
import RestPage from "../components/HIIT/RestPage";
import PreparationPage from "../components/HIIT/PreparationPage";
import { formatTime } from "../components/common";
import { useState, useEffect } from "react";

const HiitTimerPage = () => {
  const [isSetteing, setIsSetting] = useState(false);
  const [display, setDisplay] = useState<Display>("preparation");

  const [settingCount, setSettingCount] = useState(1);

  const decrementSetting = () => {
    setSettingCount((state) => --state);
  };

  const incrementSetting = () => {
    setSettingCount((state) => ++state);
  };

  const [exerciseCount, setExerciseCount] = useState(1);
  const [keepExerciseCount, setKeepExerciseCount] = useState(1);

  const decrementExercise = () => {
    setExerciseCount((state) => --state);
    setKeepExerciseCount((state) => --state);
  };

  const incrementExercise = () => {
    setExerciseCount((state) => ++state);
    setKeepExerciseCount((state) => ++state);
  };

  const [restCount, setRestCount] = useState(1);
  const [keepRestCount, setKeepRestCount] = useState(1);

  const decrementRest = () => {
    setRestCount((state) => --state);
    setKeepRestCount((state) => --state);
  };

  const incrementRest = () => {
    setRestCount((state) => ++state);
    setKeepRestCount((state) => ++state);
  };

  const [preparationCount, setPreparationCount] = useState(1);

  const decrementPreparation = () => {
    setPreparationCount((state) => --state);
  };

  const incrementPreparation = () => {
    setPreparationCount((state) => ++state);
  };

  const [isStart, setIsStart] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [isPreparation, setIsPreparation] = useState(false);

  useEffect(() => {
    if (!settingCount) {
      setIsStart(false);
      setIsRest(false);
      setDisplay("preparation");
      setIsSetting(false);
      return;
    }
    if (isStart && exerciseCount > 0) {
      const interval = setInterval(() => {
        setExerciseCount((count) => count - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (exerciseCount === 0) {
      setDisplay("rest");
      setSettingCount((state) => state - 1);
      setIsStart(false);
      setIsRest(true);
      setExerciseCount(keepExerciseCount);
    }
  }, [isStart, exerciseCount]);

  useEffect(() => {
    if (isRest && restCount > 0) {
      const interval = setInterval(() => {
        setRestCount((count) => count - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (restCount === 0) {
      setDisplay("exercise");
      setIsRest(false);
      setIsStart(true);
      setRestCount(keepRestCount);
    }
  }, [isRest, restCount]);

  useEffect(() => {
    if (isPreparation && preparationCount > 0) {
      const interval = setInterval(() => {
        setPreparationCount((count) => count - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (preparationCount === 0) {
      setDisplay("exercise");
      setIsPreparation(false);
      setIsStart(true);
    }
  }, [isPreparation, preparationCount]);

  const startTimer = () => {
    setIsSetting(true);
    setIsPreparation((state) => !state);
  };
  return (
    <Container>
      {!isSetteing && (
        <Box>
          <Typography>セット数</Typography>
          <Box sx={{ display: "flex" }}>
            <Button onClick={decrementSetting} variant="contained">
              -
            </Button>
            <Typography sx={{ mx: 2 }}>{settingCount}</Typography>
            <Button onClick={incrementSetting} variant="contained">
              +
            </Button>
          </Box>
          <Typography>運動</Typography>
          <Box sx={{ display: "flex" }}>
            <Button onClick={decrementExercise} variant="contained">
              -
            </Button>
            <Typography sx={{ mx: 2 }}>{formatTime(exerciseCount)}</Typography>
            <Button onClick={incrementExercise} variant="contained">
              +
            </Button>
          </Box>
          <Typography>休憩</Typography>
          <Box sx={{ display: "flex" }}>
            <Button onClick={decrementRest} variant="contained">
              -
            </Button>
            <Typography sx={{ mx: 2 }}>{formatTime(restCount)}</Typography>
            <Button onClick={incrementRest} variant="contained">
              +
            </Button>
          </Box>
          <Typography>準備</Typography>
          <Box sx={{ display: "flex" }}>
            <Button onClick={decrementPreparation} variant="contained">
              -
            </Button>
            <Typography sx={{ mx: 2 }}>
              {formatTime(preparationCount)}
            </Typography>
            <Button onClick={incrementPreparation} variant="contained">
              +
            </Button>
          </Box>
          <Button sx={{ mt: 2 }} variant="contained" onClick={startTimer}>
            開始
          </Button>
        </Box>
      )}

      {/* <TimerSetPage /> */}
      {display === "preparation" && isSetteing && (
        <>
          {settingCount}
          <PreparationPage count={preparationCount} />
        </>
      )}
      {display === "rest" && (
        <>
          {settingCount}
          <RestPage count={restCount} />
        </>
      )}
      {display === "exercise" && (
        <>
          {settingCount}
          <ExercisePage count={exerciseCount} />
        </>
      )}
    </Container>
  );
};

export default HiitTimerPage;
