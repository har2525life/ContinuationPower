import React, { memo } from "react";
import { Typography } from "@mui/material";
import { formatTime } from "../common";

const RestPage: React.FC<CountProps> = memo(({ count }) => {
  return (
    <>
      <Typography>{formatTime(count)}</Typography>
      <Typography>休憩</Typography>
    </>
  );
});

export default RestPage;
