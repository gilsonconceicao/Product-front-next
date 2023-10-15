'use client';
import { ThemeProvider } from "@mui/material";
import { themeCustom } from '@/Themes/Theme';

export const ThemeCustomProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={themeCustom}>{children}</ThemeProvider>
  )
}
