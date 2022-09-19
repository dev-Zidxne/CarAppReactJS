import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`flex items-center `}
`;

const LogoText = styled.div`
  ${tw`m-1 text-xl font-bold text-black md:text-2xl`}
`;

const Image = styled.div`
  ${tw`h-6 md:h-9`}

  img {
    width: auto;
    height: 100px;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg}></img>
      </Image>
      <LogoText>YourCar</LogoText>
    </LogoContainer>
  );
}

export default Logo;
