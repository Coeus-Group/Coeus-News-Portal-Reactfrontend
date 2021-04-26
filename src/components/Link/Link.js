import React from "react";
import { StyledLink } from "./style";

export const Link = (props) => {
  return <StyledLink href={props.to}> {props.children} </StyledLink>;
};
