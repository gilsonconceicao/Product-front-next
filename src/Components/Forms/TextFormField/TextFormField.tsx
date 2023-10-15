'use client';
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { useFormContext } from "@/Contexts/FormContext/FormContext";

type TextFormFieldProps = {
  name: string,
  label: string
} & TextFieldProps;

export const TextFormField = ({ name, label }: TextFormFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => {
        return (
          <TextField
            helperText={error ? error.message : null}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            label={label}
            variant="outlined"
          />
        )
      }}
    />
  );
};