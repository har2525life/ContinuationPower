import React, { useState, memo } from "react";
import { Typography } from "@mui/material";
import { formatTime } from "../common";

const PreparationPage: React.FC<CountProps> = memo(({ count }) => {
  return (
    <>
      <Typography>{formatTime(count)}</Typography>
      <Typography>準備</Typography>
    </>
  );
});

export default PreparationPage;
