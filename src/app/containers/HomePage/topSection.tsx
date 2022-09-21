import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
w-full 
max-w-screen-2xl
flex
justify-between 
pl-3 
pr-3
lg:pl-12 
lg:pr-12 
  .`};
`;

const LeftContainer = styled.div`
  ${tw`flex flex-col w-1/2`}
`;

const RightContainer = styled.div`
  ${tw`relative flex flex-col w-1/2 mt-20 `}
`;

const Slogan = styled.h1`
  ${tw`mb-4 text-2xl font-bold text-black xl:text-6xl md::text-5xl lg:font-black md:font-extrabold sm:leading-snug lg:leading-normal xl:leading-relaxed`}
`;
const Description = styled.p`
  ${tw`overflow-hidden text-xs text-gray-800 lg:text-sm xl:text-lg sm:max-h-full max-h-12`}
`;

function TopSection() {
  return <div>topSection</div>;
}

export default TopSection;
