import React, { createContext, useEffect, useState } from "react";
import {
  ThemeProvider as StyledProvider,
  createGlobalStyle,
} from "styled-components";

const themes = {
  dark: {
    type : "dark",
    background: "rgb(20, 22, 37)",
    foreground: "rgb(255, 255, 255)",
    text: {
      primary: {
        color: "rgb(255, 255, 255)",
      },
      secondary: {
        color: "rgb(223, 227, 250)",
      },
    },
    buttons: {
      primary: {
        backgroundColor: "rgb(124, 93, 250)",
        color: "rgb(255, 255, 255)",
      },
      secondary: {
        backgroundColor: "rgb(236, 87, 87)",
        color: "rgb(255, 255, 255)",
      },
      tertiary: {
        backgroundColor: "rgb(37, 41, 69)",
        color: "rgb(223, 227, 250)",
      },
    },
  },
  light: {
    type: "light",
    background: "rgb(248, 248, 251)",
    foreground: "rgb(20, 22, 37)",
    text: {
      primary: {
        color: "rgb(12, 14, 22)",
      },
      secondary: {
        color: "rgb(136, 142, 176)",
      },
    },
    buttons: {
      primary: {
        backgroundColor: "rgb(124, 93, 250)",
        color: "rgb(255, 255, 255)",
      },
      secondary: {
        backgroundColor: "rgb(236, 87, 87)",
        color: "rgb(255, 255, 255)",
      },
      tertiary: {
        backgroundColor: "rgb(249, 250, 254)",
        color: "rgb(126, 136, 195)",
      },
    },
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body {
    background-color:${(props) => props.theme.background};
  }
`;

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const localTheme = window.localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(localTheme);
  const themeObject = theme === "dark" ? themes.dark : themes.light;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const values = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={values}>
      <StyledProvider theme={themeObject}>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
