import styled from "styled-components";
import { breakpoints, colors, sizes, easings, delays, vars } from "../../config/variable";

export const HeaderContainer = styled.header`
    min-height: 100vh;
    background-color: white;
    color: black;
    padding: calc(${sizes.sMain} / 4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .author,
    .quote {
        margin: 0;
        z-index: 9;
    }

    .author {
        a {
            color: black;
            text-decoration: none;
            .name {
                display: inline;
            }
            .jobtitle {
                display: none;
            }
            &:hover {
                color: black;
                .name {
                    display: none;
                }
                .jobtitle {
                    display: inline;
                }
            }
        }
    }

    .quote {
        margin-bottom: calc(8rem / 2);
    }

    @media screen and (min-width: ${breakpoints.tabletBreakpoint}) {
        padding: calc(${sizes.sMain} / 2);
        .quote {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: ${breakpoint.desktop}) {
        padding: $s-main;
    }
`;
