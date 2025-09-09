import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

const Inputs = ({
  label,
  placeholder,
  required = false,
  fullWidth = true,
  startDecorator,
  endDecorator,
  ...props
}) => {
  return (
    <FormControl
      required={required}
      sx={{
        width: fullWidth ? "100%" : "auto",
        mb: 3,
      }}
    >
      {label && (
        <FormLabel
          sx={{
            mb: 1,
            fontSize: "14px",
            fontWeight: 500,
            color: "neutral.600",
          }}
        >
          {label}
        </FormLabel>
      )}

      <Input
        placeholder={placeholder}
        {...props}
        startDecorator={startDecorator}
        endDecorator={endDecorator}
        sx={{
          width: "100%",
          borderRadius: "12px",
          border: "1px solid",
          borderColor: "neutral.200",
          backgroundColor: "neutral.50",
          fontSize: "15px",
          px: 2,
          py: 1.5,
          transition: "all 0.2s ease",
          "&:hover": {
            borderColor: "neutral.400",
            backgroundColor: "neutral.100",
          },
          "&:focus-within": {
            borderColor: "primary.500",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          },
        }}
      />
    </FormControl>
  );
};

export default Inputs;
