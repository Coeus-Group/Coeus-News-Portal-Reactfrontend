import styled from "styled-components";
import { colors } from "../styles/colors";

export const BurgerMenuWrapper = styled.div`
  height: 4.8vw;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  margin: 4vw;

`;

export const BurgerLine = styled.div`
  background-color: color.;
  height: 0.5vw;
  width: 6vw;
  align-self: center;
  transition: all linear;

  &:first-child {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    transform-origin: top left;
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.open ? "0" : "1")};
  }

  &:last-of-type {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0deg)")};
    transform-origin: bottom left;
  }
`;
