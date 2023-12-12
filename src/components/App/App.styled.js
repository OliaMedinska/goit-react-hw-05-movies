import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    min-height: 44px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #9EBC9E;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const List = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
gap: 15px;
`;

export const StyledNavlink = styled(NavLink)`
text-decoration: none;
color: #333;
font-weight: bold;

&.active {
    color: #fff;
  }
`;

