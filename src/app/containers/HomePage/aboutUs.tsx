import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../../responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center w-full pt-4 bg-white 2xl:justify-center pr-7 pl-7 md:pl-0 md:pr-0`}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`flex flex-col md:w-1/2 md:ml-6 2xl:ml-16`}
`;

const Title = styled.div`
  ${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`}
`;

const InfoText = styled.div`
  ${tw`max-w-2xl mt-4 text-sm font-normal text-gray-500 md:text-base`}
`;

export default function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg}></img>
      </CarContainer>
      <InfoContainer>
        <Title>Get the best rental deal experience</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          eligendi illum ad debitis esse, natus praesentium quis eaque inventore
          quisquam assumenda id nobis amet vel autem cupiditate quos minus
          dolore perspiciatis, reprehenderit neque, tempore officiis.
          Perspiciatis nulla laborum iusto, aliquid, recusandae incidunt ex
          earum dicta dolorem quos dolores inventore commodi?
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
