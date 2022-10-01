import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: rgb(31 42 76);
  ${tw`flex flex-row flex-wrap min-w-full pb-1 pt-7`}
`;

const ABoutContainer = styled.div`
  ${tw`flex flex-col `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <ABoutContainer>
        <Logo color="white" bgColor="dark"></Logo>
      </ABoutContainer>
    </FooterContainer>
  );
}
