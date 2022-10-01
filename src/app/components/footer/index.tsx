import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background-color: rgb(31 42 76);
  ${tw`flex items-center justify-center min-w-full pt-4 pb-1 md:pt-12 `}
`;

const InnerContainer = styled.div`
  ${tw`flex flex-col w-full h-full max-w-screen-2xl`}
`;

const AboutContainer = styled.div`
  ${tw`flex flex-col `}
`;

const AboutText = styled.p`
  ${tw`max-w-xs mt-2 text-sm font-normal leading-5 text-white`}
`;

const LinksList = styled.div`
  ${tw`list-none outline-none`}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark"></Logo>
          <AboutText>YourCar is a car renting and selling company</AboutText>
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
