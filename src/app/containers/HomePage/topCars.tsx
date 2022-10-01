import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pr-4 mb-10 pl-4md:pl-0 md:pl-0 md:pr-0 `}
`;

const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`};
`;

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

export const TopCars = () => {
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer></CarsContainer>
    </TopCarsContainer>
  );
};
