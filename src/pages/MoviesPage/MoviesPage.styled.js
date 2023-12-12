import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 8px;
    border: #9EBC9E solid;
    margin: 30px;
`;

export const Button = styled.button`
    display: inline-block;
    width: 70px;
    height: 48px;
    border: 0;
`;

export const Input = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 15px;
    border: 2px;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;

    &::placeholder {
        font: inherit;
        font-size: 18px;
      }
`;

export const ItemsList = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const ItemLink = styled(NavLink)`
text-decoration: none;
color: #333;
font-weight: bold;

&:hover {
    color: #9EBC9E;
}
`;