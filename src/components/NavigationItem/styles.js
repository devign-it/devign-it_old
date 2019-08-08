import styled from "styled-components";
import { breakpoints, colors, sizes, easings, delays, vars } from "../../config/variable";

/*
    height: $s-main / 1.5;
    background-color: $c-black;
    border-right: 1.5px solid $c-white;

    background-color: $c-white;
    color: $c-black;
*/

export const NavigationItemContainer = styled.div`
    width: calc(100% / 4);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: calc(${sizes.sMain} - 6px);
    border-right: 3px solid ${colors.white};
    overflow: hidden;

    @media screen and (min-width: ${breakpoints.tabletBreakPoint}) {
        height: ${sizes.sMain};
        padding: 0;
        background-color: inherit;
        border-right: 3px solid ${colors.white};
    }

    h2 {
        padding: 0;
        margin: 0;
        text-align: center;
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
        transform-style: preserve-3d;

        a {
            text-decoration: none;
            color: ${colors.white};
        }
    }

    &:after,
    &:before {
        content: none;
    }

    &:last-child {
        border-right: 0;
    }

    &.isActive {
        background-color: ${colors.white};
        color: ${colors.black};
    }
`;
