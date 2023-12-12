import styled from "styled-components";
import { NavLink} from "react-router-dom";

export const MoviePoster = styled.img`
    max-width: 400px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-left: 30px;
    margin-bottom: 60px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextContent = styled.p`
    max-width: 700px;
`;

export const SecHeader = styled.h2`
    margin-left: 30px;
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const StyledNavlink = styled(NavLink)`
text-decoration: none;
color: #333;
font-weight: bold;

&.active {
    color: #9EBC9E;
  }

  &: hover {
    color: #9EBC9E;
  }
`;

export const Button = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 20px;

  &:hover {
    color: #9EBC9E;
}
`;
