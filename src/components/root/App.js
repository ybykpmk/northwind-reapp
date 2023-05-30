import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Dashboard></Dashboard>
    </Container>
  );
}

export default App;