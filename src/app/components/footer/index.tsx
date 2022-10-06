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
  ${tw`flex w-full h-full max-w-screen-2xl`}
`;

const AboutContainer = styled.div`
  ${tw`flex flex-col mr-2 ml-7 md:mr-12`}
`;

const AboutText = styled.p`
  ${tw`max-w-xs mt-2 text-sm font-normal leading-5 text-white`}
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col mr-2 md:mr-12`}
`;

const LinksList = styled.div`
  ${tw`flex flex-col list-none outline-none`}
`;

const ListItem = styled.li`
  ${tw`mb-3 `};
  & > a {
    ${tw`text-xs text-white transition-all hover:text-gray-200`}
  }
`;

const HeaderTitle = styled.ul`
  ${tw`mb-3 text-2xl font-bold text-white `}
`;
export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark"></Logo>
          <AboutText>YourCar is a car renting and selling company</AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home </a>
            </ListItem>
            <ListItem>
              <a href="#">About Us </a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog </a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ </a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us </a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions </a>
            </ListItem>
          </LinksList>
        </SectionContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
