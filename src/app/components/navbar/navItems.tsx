import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
  ${tw`flex list-none `}
`;
const NavItem = styled.li`
  ${tw`mr-1 text-xs font-medium transition duration-300 ease-in-out cursor-pointer  md-text-base md:mr-1 hover:text-gray-700`}
`;

function navItems() {
  return <div>navItems</div>;
}

export default navItems;
