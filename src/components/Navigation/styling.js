import styled from "styled-components";

import { breakpoints, colors, sizes, easings, delays, vars } from "../../config/variable";
/*
border 1.5px solid ${colors.white}
border-color: ${colors.white}

@media screen and (min-width: $tablet-breakpoint) {
    top: calc(${sizes.sMain} / 2;
    border: 3px solid ${colors.white};
*/

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    position: sticky;
    z-index: 15;
    border-radius: inherit;
    position: sticky;
    top: calc(${sizes.sMain} / 2);
    border: 1.5px solid ${colors.white};

    @media screen and (min-width: ${breakpoints.tabletBreakpoint}) {
        top: calc(${sizes.sMain} / 2);
        border: 3px solid ${colors.white};
        margin: 0;
        width: 100%;
    }

    & > .main-navigation--item {
        width: calc(100% / 3);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        height: calc(${sizes.sMain} / 1.5);
        background-color: ${colors.black};
        border-right: 1.5px solid ${colors.white};

        @media screen and (min-width: 600) {
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
    }

    &.isSticky {
        animation: menuCollapse__out__mobile calc(${delays.delayTotal} / 2) ${easings.tSmoothOne} 1 both;
        .main-navigation--item {
            animation: menuItemCollapse__out__mobile calc(${delays.delayTotal} / 2) ${easings.tSmoothOne} 1 both;
        }
    }
    &.isStatic {
        animation: menuCollapse__in__mobile calc(${delays.delayTotal} / 2) ${easings.tSmoothOne} 1 both;
        .main-navigation--item {
            animation: menuItemCollapse__in__mobile calc(${delays.delayTotal} / 2) ${easings.tSmoothOne} 1 both;
        }
    }

    @keyframes menuCollapse__out__mobile {
        0% {
            width: 100%;
            margin-left: 0;
        }
        100% {
            width: 100vw;
            margin-left: calc(-${sizes.sMain} / 4);
        }
    }

    @keyframes menuItemCollapse__out__mobile {
        0% {
            height: calc(${sizes.sMain} / 1.5);
        }
        100% {
            height: calc(${sizes.sMain} / 2);
        }
    }

    @keyframes menuCollapse__in__mobile {
        0% {
            width: 100vw;
            margin-left: calc(-${sizes.sMain} / 4);
        }
        100% {
            width: 100%;
            margin-left: 0;
        }
    }

    @keyframes menuItemCollapse__in__mobile {
        0% {
            height: calc(${sizes.sMain} / 2);
        }
        100% {
            height: calc(${sizes.sMain} / 1.5);
        }
    }

    @media screen and (min-width: 48em) {
        &.isStatic {
            animation: menuCollapse__out calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;

            .main-navigation--item {
                animation: menuItemCollapse__out calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;

                h2 {
                    animation: menuItemTextCollapse__out calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;
                }
            }
        }

        &.isSticky {
            animation: menuCollapse__in calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;

            .main-navigation--item {
                animation: menuItemCollapse__in calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;

                h2 {
                    animation: menuItemTextCollapse__in calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;
                }
            }

            &.isOpen {
                animation: menuCollapse__out calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;

                .main-navigation--item {
                    animation: menuItemCollapse__out calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;

                    h2 {
                        animation: menuItemTextCollapse__out calc(${delays.delayTotal}) ${easings.tSmoothOne} 1 both;
                        /* transform: translateX(-200%);*/
                    }
                }
            }

            &.isClosed {
                animation: menuCollapse__in ${delays.delayTotal} ${easings.tSmoothOne} 1 forwards;

                .main-navigation--item {
                    animation: menuItemCollapse__in ${delays.delayTotal} ${easings.tSmoothOne} 1 both;

                    h2 {
                        animation: menuItemTextCollapse__in ${delays.delayTotal} ${easings.tSmoothOne} 1 both;
                    }
                }
            }
        }

        &.isClosed,
        &.isOpen,
        &.isStatic,
        &.isSticky {
            .main-navigation--item {
                h2 {
                    animation-delay: calc(${delays.delayTotal} / 6);
                }

                &:nth-child(1) h2 {
                    animation-delay: calc(${delays.delayTotal} / 6 + ${delays.delayTotal} / 4);
                }

                &:nth-child(2) h2 {
                    animation-delay: calc(${delays.delayTotal} / 6 + ${delays.delayTotal} / 5);
                }

                &:nth-child(3) h2 {
                    animation-delay: calc(${delays.delayTotal} / 6 + ${delays.delayTotal} / 6);
                }
            }
        }
    }
}

.main-container--text-container {
    position: relative;

    section {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // display: none;
        list-style: none;
    }
}

@keyframes menuCollapse__in {
    0% {
        top: calc(${sizes.sMain} / 2);
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }

    25% {
        top: calc(${sizes.sMain} / 2);
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }

    50% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
        border-radius: inherit;
    }

    65% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
    }

    75% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
        border-radius: 50%;
    }

    80% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        margin: 0;
        border-radius: 50%;
    }

    100% {
        top: calc(${sizes.sMain} / 1.5);
        margin: calc(${sizes.sMain} / 4) calc(${sizes.sMain} / 4) calc(${sizes.sMain} / 4) 0;
        height: calc(${sizes.sMain} / 2);
        width: calc(${sizes.sMain} / 2);
        overflow: hidden;
        border-radius: 50%;
    }
}

@keyframes menuItemCollapse__in {
    0% {
        opacity: 1;
        display: block;
    }

    25% {
        opacity: 1;
        display: block;
    }

    50% {
        opacity: 1;
        border: 0;
        display: block;
    }

    75% {
        opacity: 1;
        padding: 0;
        border-width: 0;
        display: none;
    }

    100% {
        opacity: 0;
        padding: 0;
        border-width: 0;
        display: none;
    }
}
@keyframes menuItemTextCollapse__in {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
    }

    75% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }

    100% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }
}

@keyframes menuCollapse__out {
    0% {
        top: calc(${sizes.sMain} / 1.5);
        height: calc(${sizes.sMain} / 2);
        width: calc(${sizes.sMain} / 2);
        margin: calc(${sizes.sMain} / 4) calc(${sizes.sMain} / 4) calc(${sizes.sMain} / 4) 0;
        overflow: hidden;
        border-radius: 50%;
    }

    20% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
        margin: 0;
        border-radius: 50%;
    }

    25% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
        border-radius: 50%;
    }

    45% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
        border-radius: inherit;
    }

    50% {
        top: calc(${sizes.sMain} / 2);
        height: calc(${sizes.sMain});
        width: calc(${sizes.sMain});
        overflow: hidden;
        border-radius: inherit;
    }

    75% {
        top: calc(${sizes.sMain} / 2);
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }

    100% {
        top: calc(${sizes.sMain} / 2);
        width: inherit;
        height: inherit;
        border-radius: inherit;
    }
}
@keyframes menuItemCollapse__out {
    0% {
        opacity: 0;
        padding: 0;
        border-width: 0;
        display: none;
    }

    25% {
        opacity: 1;
        padding: 0;
        border-width: 0;
        display: none;
    }

    50% {
        opacity: 1;
        border: 0;
        display: block;
    }

    75% {
        opacity: 1;
        height: calc(${sizes.sMain});
        display: block;
    }

    100% {
        opacity: 1;
        height: calc(${sizes.sMain});
        display: block;
    }
}
@keyframes menuItemTextCollapse__out {
    0% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }

    25% {
        transform: translate3d(-50vw, 0, 0) rotateX(-6deg) rotateY(6deg) rotateZ(5deg);
    }

    100% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0);
    }
}
`;
