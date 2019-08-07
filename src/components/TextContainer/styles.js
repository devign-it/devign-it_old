import styled from "styled-components";

/* Vars used in css 

TextContainer
max-width: $s-main * 8;
margin-bottom: $s-main / 2

*/

export const Container = styled.ul`
    margin: 0;
    padding: 0;
    columns: 2;
    column-gap: 0;
    list-style: none;
    width: auto;
    max-width: calc($s-main * 8);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc($s-main / 2);
`;

export default Container;
