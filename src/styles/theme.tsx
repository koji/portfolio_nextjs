import { ThemeProvider } from "styled-components";
import { ReactElement } from "react";
import theme from "../themes/default";
import GlobalStyles from "./globals";

interface ThemeProps {
  children: ReactElement;
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
