import React from "react";
import { Divider as ChackraDivider, Grid } from "@chakra-ui/core";

export const Divider = () => {
  return (
    <Grid
    gridTemplateColumns="1fr 1fr"
    columnGap={12}
    opacity={0.4}
    >
      <ChackraDivider marginY={6} />
      <ChackraDivider marginY={6} />
    </Grid>
  );
};
