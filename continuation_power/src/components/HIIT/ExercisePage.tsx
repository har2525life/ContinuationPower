import React, { useState, useEffect, memo } from "react";
import { Typography } from "@mui/material";

import { formatTime } from "../common";

const ExercisePage: React.FC<CountProps> = memo(({ count }) => {
  return (
    <>
      <Typography>{formatTime(count)}</Typography>
      <Typography>運動</Typography>
    </>
  );
});

export default ExercisePage;
