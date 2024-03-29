import React, { useState, useEffect } from "react";
import "./index.css";
import { Container } from "@mui/material";
import Header from "components/Header";
import Footer from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import Routing from "./components/Routing";
import { theme } from "theme";
import { AuthProvider } from "context/AuthContext";
import { PaperProvider } from "context/PaperContext";

const Styled = {};

Styled.WallpaperBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url(https://wallpaperaccess.com/full/1399270.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
`;

function App() {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <PaperProvider>
            <Header />
            <Styled.WallpaperBackground />
            <Container sx={{ paddingTop: "80px" }}>
              <Routing />
            </Container>
          </PaperProvider>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
