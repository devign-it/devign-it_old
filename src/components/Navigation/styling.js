import styled from "styled-components";

/*
border 1.5px solid $c-white
border-color: $c-white
*/

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    position: sticky;
    z-index: 15;
    border-radius: inherit;
    position: sticky;
    top: 0;
    border: 1.5px solid white;
    border-color: white;

    /* @media screen and (min-width: $tablet-breakpoint) {
        top: $s-main / 2;
        border: 3px solid $c-white;

        margin: 0;
        width: 100%;
    } */

    &--item {
        width: calc(10 / 3%);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: $s-main / 1.5;
        background-color: $c-black;
        border-right: 1.5px solid $c-white;
        border-color: $c-white;
        @media screen and (min-width: $tablet-breakpoint) {
            height: $s-main;
            padding: 0;
            background-color: inherit;
            border-right: 3px solid $c-white;
        }
        h2 {
            padding: 0;
            margin: 0;
            text-align: center;
            transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
            transform-style: preserve-3d;
        }

        &:after,
        &:before {
            content: none;
        }

        &:last-child {
            border-right: 0;
        }

        &.isActive {
            background-color: $c-white;
            color: $c-black;
        }
    }

    // State classes an animations

    &.isSticky {
        animation: menuCollapse__out__mobile $delay--total / 2 $t-smooth_one 1 both;
        .main-navigation--item {
            animation: menuItemCollapse__out__mobile $delay--total / 2 $t-smooth_one 1
                both;
        }
    }
    &.isStatic {
        animation: menuCollapse__in__mobile $delay--total / 2 $t-smooth_one 1 both;
        .main-navigation--item {
            animation: menuItemCollapse__in__mobile $delay--total / 2 $t-smooth_one 1 both;
        }
    }
    // Keyframes for main-navigation
    // ANIMATE OUT MOBILE
    @keyframes menuCollapse__out__mobile {
        0% {
            width: 100%;
            margin-left: 0;
        }
        100% {
            width: 100vw;
            margin-left: -$s-main / 4;
        }
    }

    @keyframes menuItemCollapse__out__mobile {
        0% {
            height: $s-main / 1.5;
        }
        100% {
            height: $s-main / 2;
        }
    }

    // Keyframes for main-navigation
    // ANIMATE IN MOBILE

    @keyframes menuCollapse__in__mobile {
        0% {
            width: 100vw;
            margin-left: -$s-main / 4;
        }
        100% {
            width: 100%;
            margin-left: 0;
        }
    }

    @keyframes menuItemCollapse__in__mobile {
        0% {
            height: $s-main / 2;
        }
        100% {
            height: $s-main / 1.5;
        }
    }

    @media screen and (min-width: $tablet-breakpoint) {
        &.isStatic {
            animation: menuCollapse__out $delay--total * 1.25 $t-smooth_one 1 both;

            .main-navigation--item {
                animation: menuItemCollapse__out $delay--total * 1.25 $t-smooth_one 1 both;

                h2 {
                    animation: menuItemTextCollapse__out $delay--total * 1.25
                        $t-smooth_one 1 both;
                }
            }
        }

        &.isSticky {
            animation: menuCollapse__in $delay--total * 1.5 $t-smooth_one 1 both;

            .main-navigation--item {
                animation: menuItemCollapse__in $delay--total * 1.5 $t-smooth_one 1 both;

                h2 {
                    animation: menuItemTextCollapse__in $delay--total * 1.5 $t-smooth_one
                        1 both;
                }
            }

            &.isOpen {
                animation: menuCollapse__out $delay--total $t-smooth_one 1 both;

                .main-navigation--item {
                    animation: menuItemCollapse__out $delay--total $t-smooth_one 1 both;

                    h2 {
                        animation: menuItemTextCollapse__out $delay--total $t-smooth_one 1
                            both;
                        // transform: translateX(-200%);
                    }
                }
            }

            &.isClosed {
                animation: menuCollapse__in $delay--total $t-smooth_one 1 forwards;

                .main-navigation--item {
                    animation: menuItemCollapse__in $delay--total $t-smooth_one 1 both;

                    h2 {
                        animation: menuItemTextCollapse__in $delay--total $t-smooth_one 1
                            both;
                    }
                }
            }
        }

        // html body.cursor-on main#main section.main-container nav.main-navigation.isStatic.isOpen div.main-navigation--item.isActive h2

        &.isClosed,
        &.isOpen,
        &.isStatic,
        &.isSticky {
            .main-navigation--item {
                h2 {
                    animation-delay: $delay--total / 6;
                }

                &:nth-child(1) h2 {
                    animation-delay: $delay--total / 6 + $delay--total / 4;
                }

                &:nth-child(2) h2 {
                    animation-delay: $delay--total / 6 + $delay--total / 5;
                }

                &:nth-child(3) h2 {
                    animation-delay: $delay--total / 6 + $delay--total / 6;
                }
            }
        }
    }
`;
