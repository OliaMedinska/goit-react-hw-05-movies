import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PopularList = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const PopularLink = styled(NavLink)`
text-decoration: none;
color: #333;
font-weight: bold;

&:hover {
    color: #9EBC9E;
}
`;