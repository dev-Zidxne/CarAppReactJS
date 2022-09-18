import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`flex flex-row items-center justify-between w-full max-w-2xl lg-pl-12 lg:pr-12 `}
`;

function Navbar() {
  return <NavBarContainer></NavBarContainer>;
}

export default Navbar;
