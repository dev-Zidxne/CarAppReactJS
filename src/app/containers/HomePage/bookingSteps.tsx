import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col w-full pt-3 pb-3 lg:pt-6 `}
`;

const Title = styled.h2`
  ${tw`text-xl font-extrabold text-black lg:text-4xl`}
`;

const StepsContainer = styled.div`
  ${tw`flex flex-wrap  justify-evenly mt-7 lg:mt-16`}
`;

export function BookingSteps() {}
