import React from "react";
import {
  Input as ChackraInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/core";

export const Input: React.FC<ChackraInputProps> = (props) => {
  return (
    <ChackraInput
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      borderRadius="sm"
      {...props}
    />
  );
};
