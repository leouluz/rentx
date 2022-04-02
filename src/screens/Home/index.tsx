import React from "react";
import { 
  Container, 
  Title,
  Header,
} from "./styles";

import Logo from "../../assets/logo.svg"

import { StatusBar } from "react-native";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo />
      </Header>
      <Title>Home</Title>
    </Container>
  );
}
