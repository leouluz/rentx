import React from "react";
import { 
  Container, 
  TotalCars,
  Header,
  HeaderContent,
} from "./styles";

import Logo from "../../assets/logo.svg"

import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coubé',
    rent: {
      period: 'Ao Dia',
      price: '120',
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png',
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carData} />
    </Container>
  );
}
