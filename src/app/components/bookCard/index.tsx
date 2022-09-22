import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";
import { Button } from "../button";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center pt-1 pb-1 pl-2 pr-2 bg-white rounded-md md:pt-2 md:pb-2 md:pl-6 md:pr-6 md:pl-9 md:pr-9 `};
`;

const ItemConatiner = styled.div`
  ${tw`flex `}
`;
const Icons = styled.span`
  ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`}
`;

const Name = styled.span`
  ${tw`text-xs text-gray-600 md:text-sm`}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`ml-2 mr-2 bg-gray-300 md:mr-5 md:ml-5`}
`;

export default function BookCard() {
  return (
    <CardContainer>
      <ItemConatiner>
        <Icons>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icons>
        <Name>Pick up Date </Name>
      </ItemConatiner>
      <LineSeparator />
      <ItemConatiner>
        <Icons>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icons>
        <Name>Return Date </Name>
      </ItemConatiner>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your RIde" />
    </CardContainer>
  );
}
