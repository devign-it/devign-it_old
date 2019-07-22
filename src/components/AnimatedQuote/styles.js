import styled from "styled-components";

/*
background-color: $c-white;
color: $c-black;
padding: $s-main / 4;

color: $c-black;

color: $c-black;

margin-bottom: $s-main / 2;

@media screen and (min-width: $tablet-breakpoint) {

padding: $s-main / 2;

@media screen and (min-width: $desktop-breakpoint) {
    padding: $s-main;
*/

export const HeaderContainer = styled.header`
    min-height: 100vh;
    background-color: white;
    color: black;
    padding: calc(8rem / 4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .author, .quote {
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

    @media screen and (min-width: $tablet-breakpoint) {
      padding: $s-main / 2;
      .quote {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: $desktop-breakpoint) {
      padding: $s-main;
    }
}`;
