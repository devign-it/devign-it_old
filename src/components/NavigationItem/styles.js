import styled from "styled-components";

/*
    height: $s-main / 1.5;
    background-color: $c-black;
    border-right: 1.5px solid $c-white;

    background-color: $c-white;
    color: $c-black;
*/

export const NavigationItemContainer = styled.div`
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: calc(8rem / 1.5);
    background-color: black;
    border-right: 1.5px solid white;
    border-color: white;

    /* @media screen and (min-width: $tablet-breakpoint) {
        height: $s-main;
        padding: 0;
        background-color: inherit;
        border-right: 3px solid $c-white;
    } */

    h2 a {
        padding: 0;
        margin: 0;
        text-align: center;
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
        transform-style: preserve-3d;
        color: inherit;
        text-decoration: none;
    }

    &:after,
    &:before {
        content: none;
    }

    &:last-child {
        border-right: 0;
    }

    &.isActive {
        background-color: white;
        color: black;
    }
`;
