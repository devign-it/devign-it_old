import styled from "styled-components";

/* Vars used in css 
--
AboutImage
margin: $s-main / 2 0;

transition: transform $delay--total / 2 $t-smooth_two, opacity $delay--total / 2 $t-smooth_two;
--

Blockquoute
max-width: $s-main * 8;

@media screen and (min-width: $tablet-breakpoint) {
    margin: $s-main 0 $s-main / 2 0;
    img {
        max-width: 65vh;
    }
}
*/

export const AboutPicture = styled.figure`
    display: flex;
    margin: 6rem / 2 0;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: transform $delay--total / 2 $t-smooth_two,
        opacity $delay--total / 2 $t-smooth_two;

    &:hover {
        img {
            transform: translate3d(0, 1rem, 0) rotateX(10deg) rotateY(-15deg)
                rotateZ(5deg);
            opacity: 0.75;
        }
    }

    img {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
        width: 100%;
        max-width: 25vh;
    }

    blockquote {
        text-align: center;
        position: absolute;
        max-width: initial;
        margin: 0;
        max-width: 6rem * 8;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: $tablet-breakpoint) {
        margin: 6rem 0 6rem / 2 0;
        img {
            max-width: 65vh;
        }
    }
`;
