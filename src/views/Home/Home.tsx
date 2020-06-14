import * as React from "react";

import Techs from "src/components/Techs";

import { Container } from "./styles";

const Home: React.FC<{}> = () => {
  return (
    <Container>
      <h1>Welcome to my Personal Pages</h1>
      <Techs />
    </Container>
  );
};

export default Home;
