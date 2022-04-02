import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const Header = styled.Text`
  width: 100%;
  height: 113px;

  background-color: ${({ theme }) => theme.colors.header};
`;
