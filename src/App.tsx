import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from "styled-components";
import { MainView } from "./components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <MainView />
    </Container>
  );
}

export default App;
