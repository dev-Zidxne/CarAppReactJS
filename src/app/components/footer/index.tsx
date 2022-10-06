import {
  faEnvelope,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";

const FooterContainer = styled.div`
  /* min-height: 24em; */
  background-color: rgb(29, 32, 36);
  ${tw`flex flex-col items-center min-w-full pt-10 pb-1 md:pt-12 `}
`;

const InnerContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full h-full max-w-screen-2xl`}
`;

const BottomContainer = styled.div`
  ${tw`flex justify-start w-full max-w-screen-2xl`}
`;

const CopyrightText = styled.div`
  font-size: 11px;
  ${tw`text-gray-400`}
`;
const AboutContainer = styled.div`
  ${tw`flex flex-col pl-10 pr-10 mr-2 md:mr-16`}
`;

const AboutText = styled.p`
  ${tw`max-w-xs mt-2 text-sm font-normal leading-5 text-white`}
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col w-full pl-10 pr-10 mr-2 mt-7 md:mr-16 md:pr-3 md:mt-0 md:pl-3 md:w-auto`}
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

const RedIcon = styled.span`
  ${tw`flex items-center justify-center mr-2 text-base text-white bg-red-500 rounded-full w-9 h-9`}
`;

const HorizontalContainer = styled.div`
  ${tw`flex items-center `}
`;

const Smalltext = styled.h6`
  ${tw`text-sm text-white`}
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
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <Smalltext>+1-876-316-2975</Smalltext>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <Smalltext>info@yourcar.com</Smalltext>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright 2022 YourCar. All rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
