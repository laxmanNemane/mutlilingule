import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Change to your primary color
    },
    secondary: {
      main: "#ff5722", // Change to your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
