import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "../../../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`flex list-none `}
`;
const NavItem = styled.li`
  ${tw`mr-1 text-xs font-medium text-black transition duration-300 ease-in-out cursor-pointer md:text-base md:mr-5 hover:text-gray-700`}
`;

function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu styles={menuStyles}>
        <ListContainer>
          <NavItem>
            <a href="#">Home</a>
          </NavItem>
          <NavItem>
            <a href="#">Cars</a>
          </NavItem>
          <NavItem>
            <a href="#">Services</a>
          </NavItem>
          <NavItem>
            <a href="#">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}

export default NavItems;
