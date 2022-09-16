import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden`}
`;

export function HomePage() {
  return <PageContainer>Hello world op</PageContainer>;
}
